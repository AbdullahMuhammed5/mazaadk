<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="12" sm="12">
        <v-card class="pa-4">
          <v-card-title class="pink-special-text"><v-spacer />انشاء حساب جديد<v-spacer /></v-card-title>
          <v-divider />
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" sm="12" xs="12" v-if="$vuetify.breakpoint.mdAndUp">
                <v-list-item two-line>
                  <v-list-item-avatar><v-icon color="indigo">mdi-shield-account</v-icon></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>الحماية</v-list-item-title>
                    <v-list-item-subtitle>الحماية مهمة لبياناتك لذا نضمنها لك</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line class="mt-5">
                  <v-list-item-avatar><v-icon color="blue">mdi-monitor</v-icon></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>التكنولوجيا</v-list-item-title>
                    <v-list-item-subtitle>نستعمل اخر التكنولوجيا لضمان راحتكم</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line class="mt-5">
                  <v-list-item-avatar><v-icon color="purple">mdi-cash-multiple</v-icon></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>طرق الدفع</v-list-item-title>
                    <v-list-item-subtitle>طرق الدفع : شيك مصرفي - بطاقة ائتمان - مدى - تحويل بنكي</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line class="mt-5">
                  <v-list-item-avatar><v-icon color="blue">mdi-anchor</v-icon></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>سجل و باشر في مزايدة</v-list-item-title>
                    <v-list-item-subtitle>لا تفوت الفرصة من بين يديك</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" md="6" sm="12" xs="12">
                <v-form v-model="valid">
                  <v-text-field
                    :label="$t('auth.email')"
                    :rules="[ (v) => !!v || $t('validation.required'),(v) => /.+@.+\..+/.test(v) || $t('validation.email')]"
                    color="primary"
                    prepend-inner-icon="mdi-at"
                    outlined
                    filled
                    rounded
                    required
                    type="email"
                    v-model="fields.email"
                    :error-messages="errors.email"
                    @change="errors.email = []"
                    v-validate="'required'"
                  />
                  <v-text-field
                    :label="$t('auth.name')"
                    :rules="[(v) => !!v || $t('validation.required')]"
                    color="primary"
                    prepend-inner-icon="mdi-account"
                    outlined
                    filled
                    rounded
                    :error-messages="errors.name"
                    @change="errors.name = []"
                    v-model="fields.name"
                  />
                  <v-layout>
                    <v-autocomplete
                      style="width: 30px"
                      prepend-inner-icon="mdi-phone"
                      filled
                      :items="countries"
                      :rules="[(v) => !!v || $t('validation.required')]"
                      v-model="fields.country_code"
                      :error-messages="errors.country_code"
                      @change="errors.country_code = []"
                      autocomplete="off"
                      item-value="phonecode"
                      item-text="iso"
                    >
                      <template v-slot:item="{ item }">
                        {{  item.iso + " " + "+"+ item.phonecode }}
                      </template>
                    </v-autocomplete>
                    <v-text-field
                      :label="$t('auth.phone')"
                      :rules="[(v) => !!v || $t('validation.required') , (v) =>
                        /^(([{1}[0-9]{1,2}[\ ]{1}[0-9]{4}[\ ]{1}[0-9]{4})|([0]{1}[0-9]{1}[\ ]{1}[0-9]{4}[\ ]{1}[0-9]{4})|([0]{1}[0-9]{1}[\-]{1}[0-9]{4}[\-]{1}[0-9]{4})|([\(]{1}[0]{1}[0-9]{1}[\)]{1}[\ ]{1}[0-9]{4}([\ ]|[\-]){1}[0-9]{4})|([0-9]{4}([\ ]|[\-])?[0-9,3}[\ ]]{4})|([0]{1}[0-9]{3}[\ ]{1}[0-9]{3}[\ ]{1}[0-9]{3})|([0]{1}[0-9]{9})|([\(]{1}[0-9]{3}[\)]{1}[\ ]{1}[0-9]{3}[\-]{1}[0-9]{4})|([0-9]{3}([\/]|[\-]){1}[0-9]{3}[\-]{1}[0-9]{4})|([1]{1}[\-]?[0-9]{3}([\/]|[\-]){1}[0-9]{3}[\-]{1}[0-9]{4})|([1]{1}[0-9]{9}[0-9]?)|([0-9]{3}[\.]{1}[0-9]{3}[\.]{1}[0-9]{4})|([\(]{1}[0-9]{3}[\)]{1}[0-9]{3}([\.]|[\-]){1}[0-9]{4}(([\ ]?(x|ext|extension)?)([\ ]?[0-9]{3,4}))?)|([1]{1}[\(]{1}[0-9]{3}[\)]{1}[0-9]{3}([\-]){1}[0-9]{4})|([\+]{1}[1]{1}[\ ]{1}[0-9]{3}[\.]{1}[0-9]{3}[\-]{1}[0-9]{4})|([\+]{1}[1]{1}[\ ]?[\(]{1}[0-9]{3}[\)]{1}[0-9]{3}[\-]{1}[0-9]{4}))$/.test(v) || $t('validation.phone')
                      ]"
                      color="primary"
                      filled
                      @change="errors.phone = []"
                      :error-messages="errors.phone"
                      v-model="fields.phone"
                    >
                      <template slot="prepend">

                      </template>
                    </v-text-field>
                  </v-layout>
                  <v-text-field
                    :label="$t('auth.password')"
                    :rules="[(v) => !!v || $t('validation.required')]"
                    color="primary"
                    prepend-inner-icon="mdi-lock"
                    outlined
                    filled
                    rounded
                    type="password"
                    :error-messages="errors.password"
                    @change="errors.password = []"
                    v-model="fields.password"
                  />
                  <v-text-field
                    :label="$t('auth.confirm_password')"
                    :rules="[(v) => !!v || $t('validation.required') , (v) => (this.fields.password === this.fields.password_confirmation) || $t('validation.confirm_password')]"
                    color="primary"
                    prepend-inner-icon="mdi-lock"
                    outlined
                    filled
                    rounded
                    type="password"
                    v-model="fields.password_confirmation"
                  />

                  <v-btn :disabled="!valid" :loading="loading" @click="register()" block class="white--text pink-special-bg"
                  >{{
                    $t('auth.register')
                    }}
                  </v-btn>
                </v-form>
                <v-divider class="mt-4 mb-2" />
                <social-auth  />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SocialAuth from "../../components/SocialAuth";
  export default {
    name: 'Register',
    components: {SocialAuth},
    middleware: 'guest',
    apollo: {
      countries: {
        query: require('~/apollo/queries/countries')
      }
    },
    head() {
      return {
        title: this.$t('auth.register'),
      }
    },
    data() {
      return {
        loading: false,
        valid: false,
        fields: {
          email: '',
          name: '',
          country_code: 1,
          phone: '',
          password: '',
          password_confirmation: '',
        },
        errors:{
          name: [],
          phone: [],
          country_code: [],
          email: [],
          username: [],
          password: [],
        },
        flashErrors: {
          name: null,
          phone: null,
          country_code: null,
          email: null,
          username: null,
          password: null,
        },
      }
    },
    methods: {
      getErrors()
      {
        if(this.flashErrors.name)
        {
          this.flashErrors.name.map(item => {
            this.errors.name.push(this.$t(item))
          })
        }
        if(this.flashErrors.email)
        {
          this.flashErrors.email.map(item => {
            this.errors.email.push(this.$t(item))
          })
        }
        if(this.flashErrors.username)
        {
          this.flashErrors.username.map(item => {
            this.errors.username.push(this.$t(item))
          })
        }
        if(this.flashErrors.country_code)
        {
          this.flashErrors.country_code.map(item => {
            this.errors.country_code.push(this.$t(item))
          })
        }
        if(this.flashErrors.phone)
        {
          this.flashErrors.phone.map(item => {
            this.errors.phone.push(this.$t(item))
          })
        }
        if(this.flashErrors.password)
        {
          this.flashErrors.password.map(item => {
            this.errors.password.push(this.$t(item))
          })
        }
      },
      register() {
        const {name, email, password, password_confirmation , phone , country_code} = this.fields;

        this.$apollo.mutate({
          mutation: require('~/apollo/mutation/register.gql'),
          variables: {
            name,
            email,
            country_code,
            phone,
            password,
            password_confirmation
          }
        }).then(res => {
          this.$auth.setStrategy('local');
          this.$auth.setToken('local', 'Bearer ' + res.data.register.access_token);
          this.$auth.setRefreshToken('local', res.data.register.refresh_token);
          this.$auth.setUser(res.data.register.user);
          this.$apolloHelpers.onLogin(res.data.register.access_token);
          this.$router.push("/home");
        }).catch(e => {
          let { graphQLErrors } = e;
          console.log(graphQLErrors);
          if (graphQLErrors[0].extensions.category === "validation") {
            this.flashErrors = graphQLErrors[0].extensions.validation;
          }
          this.getErrors();
        })
      },
    },
  }
</script>

<style scoped>

</style>
