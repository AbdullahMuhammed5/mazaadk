export default class LocalScheme {
  constructor(auth, options) {
    this.$auth = auth;
    this.$apollo = this.$auth.ctx.app.apolloProvider.defaultClient;
    this.name = options._name;

    this.options = Object.assign({}, DEFAULTS, options);
  }

  _setToken(token) {
    if (this.options.globalToken) {
      // Set Authorization token for all axios requests
      // this.$auth.$storage.setUniversal("token", token, false);
      //This is un-needed because we'll just get the token off of localStorage
    }
  }

  _clearToken() {
    this.$apollo.link.request = (forward, operation) => forward(operation);
  }

  mounted() {
    if (this.options.tokenRequired) {
      const token = this.$auth.syncToken(this.name);
      this._setToken(token);
    }

    return this.$auth.fetchUserOnce();
  }

  async login(operation) {
    if (!this.options.operations.login) {
      return;
    }

    const result = await this.$auth.request(
      operation,
      this.options.operations.login
    );

    if (this.options.tokenRequired && result) {
      const token = this.options.tokenType
        ? this.options.tokenType + " " + result
        : result;

      this.$auth.setToken(this.name, token);
      this._setToken(token);
    }

    return this.fetchUser();
  }

  async fetchUser(operation) {
    // User endpoint is disabled.
    if (!this.options.operations.user) {
      this.$auth.setUser({});
      return;
    }

    // Token is required but not available
    if (this.options.tokenRequired && !this.$auth.getToken(this.name)) {
      return;
    }

    // Try to fetch user and then set
    const user = await this.$auth.requestWith(
      this.name,
      operation,
      this.options.operations.user
    );
    this.$auth.setUser(user);
  }

  async logout(operation) {
    // Only connect to logout operation if it's configured
    if (this.options.operations.logout) {
      await this.$auth
        .requestWith(this.name, operation, this.options.operations.logout)
        .catch(() => {});
    }

    // But logout locally regardless
    if (this.options.tokenRequired) {
      this._clearToken();
    }

    return this.$auth.reset();
  }
}

const DEFAULTS = {
  tokenRequired: true,
  tokenType: "Bearer",
  globalToken: true
};
