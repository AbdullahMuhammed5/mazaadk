<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" sm="8">
        <v-card class="pa-4">
          <v-card-title class="pink-special-text">
            <v-spacer />
            {{ $t('auth.login') }}
            <v-spacer />
          </v-card-title>
          <v-card-text class="text-center">
            من فضلك ادخل معلومات الدخول الخاصة بحسابك لتتمكن من استخدام كل خصائص الموقع وإذا لم يكن لديك حسابك؟ يمكنك تسجيل مستخدم جديد مجانأ
          </v-card-text>
          <v-alert
            v-model="notAuthenticate"
            text
            type="error"
            icon="mdi-alert-circle"
          >
            {{ $t('auth.notAuthorized') }}
          </v-alert>
          <v-card-text>
            <v-form lazy-validation v-model="valid">
              <v-text-field
                :label="$t('auth.email')"
                :rules="[
                (v) => !!v || $t('validation.required'),
                (v) => /.+@.+\..+/.test(v) || $t('validation.email')
              ]"
                color="primary"
                prepend-inner-icon="mdi-at"
                required
                outlined
                rounded
                filled
                type="email"
                v-model="fields.username"
              />
              <v-text-field
                :label="$t('auth.password')"
                :rules="[(v) => !!v || $t('validation.required')]"
                color="primary"
                id="password"
                prepend-inner-icon="mdi-lock"
                outlined
                filled
                rounded
                type="password"
                v-model="fields.password"
              />
              <v-checkbox color="primary" :label="$t('auth.remember')" />
              <v-btn text color="pink darken-3" nuxt to="/auth/register">لا تملك حساب</v-btn>
              <v-layout>
                <v-spacer />
                <v-btn :disabled="!valid" @click="login()" :loading="loading" class="white--text pink-special-bg">{{
                  $t('auth.login')
                  }}
                </v-btn>
                <v-spacer/>
              </v-layout>
            </v-form>
            <v-divider class="mt-2 mb-2" />
            <social-auth />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SocialAuth from "../../components/SocialAuth";
  export default {
    name: 'Login',
    components: {SocialAuth},
    middleware: 'guest',
    title: 'login',
    head()
    {
      return {
        title: this.$t('auth.login'),
      }
    },
    data() {
      return {
        loading: false,
        valid: false,
        notAuthenticate: false,
        fields: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      async login() {
        const { username , password } = this.fields;
        this.$apollo.mutate({
          mutation: require('~/apollo/mutation/login.gql'),
          variables: {
            username,
            password
          }
        }).then(res => {
          console.log(res.data);
          this.$auth.setStrategy('local');
          this.$auth.setToken('local', 'Bearer ' + res.data.login.access_token);
          this.$auth.setRefreshToken('local', res.data.login.refresh_token);
          this.$auth.setUser(res.data.login.user);
          this.$apolloHelpers.onLogin(res.data.login.access_token);
          this.$router.push("/home");
        }).catch(e => {
          this.notAuthenticate = true;
        })
      },
    }
  }
</script>

<style scoped></style>
