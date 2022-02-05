<template>
  <div v-if="auth">
    <v-btn nuxt to="/favorit" icon color="grey">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon color="grey">
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn nuxt to="/bids" icon color="grey">
      <v-icon>mdi-gavel</v-icon>
    </v-btn>
    <v-btn icon color="grey" nuxt to="/search">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu :nudge-width="200"  offset-x>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
          <v-avatar color="color">
            <v-img
              :alt="user.name"
              :src="user.avatar"
              v-if="/(https?:\/\/[^\s]+)/.test(user.avatar)"
            />
            <v-img :alt="user.name" :src="'/storage/' + user.avatar" v-else />
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                :alt="user.name"
                :src="user.avatar"
                v-if="/(https?:\/\/[^\s]+)/.test(user.avatar)"
              />
              <v-img :alt="user.name" :src="'/storage/' + user.avatar" v-else />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>
                <span v-if="user.verified">Verified</span>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn nuxt to="/setting" icon>
                <v-icon>mdi-settings</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>

          <v-divider />

          <v-list-item v-for="link in links" :to="link.link" nuxt>
            <v-list-item-icon>
              <v-icon>mdi-{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t(link.name) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="logout()" color="red" dark text>
            <v-icon>mdi-power</v-icon>
            {{ $t('auth.logout') }}
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-menu>

  </div>

  <div v-else>
    <v-btn nuxt to="/auth/login" class="white--text font-weight-black pink-special-bg" rounded>
      تسجيل الدخول
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ProfileMenu',
  data() {
    return {
      verification: 33,
      links: [
        {
          icon: 'account',
          link: '/account/profile',
          name: 'profile'
        },
        {
          icon: 'shield-edit',
          link: '/setting/password',
          name: 'auth.change_password'
        },
        {
          icon: 'check-decagram',
          link: '/setting/profile',
          name: 'verification'
        },
        {
          icon: 'credit-card-settings-outline',
          link: '/setting/billing',
          name: 'billing'
        }
      ]
    }
  },
  computed: {
    auth() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth.user
    }
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$apollo.mutate({
        mutation: require('~/apollo/mutation/logout')
      })
      this.$apolloHelpers.onLogout()
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style scoped></style>
