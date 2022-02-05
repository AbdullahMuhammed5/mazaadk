<template>
  <v-container>
    <v-alert
      :type="message.type"
      border="right"
      elevation="2"
      text
      v-model="message.show"
    >{{ $t(message.text) }}
    </v-alert>
    <v-row>
      <v-col cols="12" md="8">
        <v-breadcrumbs :items="[
          {
          text: 'Setting',
          to: '/setting',
        },
        ]">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <v-card>
          <v-card-title>{{ $t('setting') }}</v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                prepend-icon="mdi-email"
                :label="$t('auth.email')"
                :error-messages="errors.email"
                @change="errors.email = null"
                :rules="[
                (v) => !!v || $t('validation.required'),
                (v) => /.+@.+\..+/.test(v) || $t('validation.email')
              ]"
                v-model="user.email"
              />
              <v-layout>
                <v-autocomplete
                  style="width: 30px"
                  prepend-icon="mdi-phone"
                  :items="countries"
                  :rules="[(v) => !!v || $t('validation.required')]"
                  v-model="user.country_code"
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
                  @change="errors.phone = null"
                  :error-messages="errors.phone"
                  v-model="user.phone"
                 />
              </v-layout>
              <v-text-field
                prepend-icon="mdi-account"
                :label="$t('auth.name')"
                :rules="[(v) => !!v || $t('validation.required')]"
                :error-messages="errors.name"
                @change="errors.name = null"
                v-model="user.name"
              />
              <v-text-field
                prepend-icon="mdi-at"
                :label="$t('auth.username')"
                :rules="[(v) => !!v || $t('validation.required')]"
                v-model="user.username"
                @change="errors.username = null"
                :error-messages="errors.username"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn :disabled="!valid" @click="saveData()" class="white--text" color="cyan">{{ $t('save') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <div class="v-card-profile">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-avatar
                class="mx-auto d-block elevation-6"
                size="130"
                slot="offset"
              >
                <v-img :alt="$auth.user.name" :src="$auth.user.avatar" v-if="/(https?:\/\/[^\s]+)/.test($auth.user.avatar)"/>
                <v-img :alt="$auth.user.name" :src="'/storage/' + $auth.user.avatar" v-else/>
                <v-fade-transition>
                  <v-overlay
                    absolute
                    v-if="hover"
                  >
                    <v-btn @click="editAvatar = true" color="white" icon>
                      <v-icon>mdi-camera</v-icon>
                    </v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-avatar>
            </template>
          </v-hover>
          <v-layout v-if="editAvatar">
            <v-form style="width: 100%" v-model="validAvatar">
              <v-file-input
                :label="$t('auth.avatar')"
                :rules="[(v) => !!v || $t('validation.required')]"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
                ref="avatar"
                v-model="user.avatar"
              />
            </v-form>
            <v-btn :disabled="!validAvatar" @click="saveAvatar()" class="mt-4" color="cyan" text>{{ $t('save') }}
            </v-btn>
          </v-layout>
          <v-card-text class="text-center">
            <h6 class="overline mb-3">
              {{ $t('doctor') }}
            </h6>

            <h4 class="font-weight-light">
              {{ $auth.user.name }}
            </h4>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "index",
    middleware: 'auth',
    apollo: {
      countries: {
        query: require('~/apollo/queries/countries')
      }
    },
    head() {
      return {
        title: this.$t('setting'),
      }
    },
    data() {
      return {
        valid: false,
        validAvatar: false,
        user: {
          name: this.$auth.user.name,
          phone: this.$auth.user.phone,
          country_code: this.$auth.user.country_code,
          email: this.$auth.user.email,
          username: this.$auth.user.username,
          avatar: undefined,
        },
        errors:{
          name: null,
          phone: null,
          country_code: null,
          email: null,
          username: null,
          avatar: null,
        },
        flashErrors: {
          name: null,
          phone: null,
          country_code: null,
          email: null,
          username: null,
          avatar: null,
        },
        message: {
          show: false,
          type: '',
          text: '',
        },
        editAvatar: false,
      }
    },
    computed: {

    },
    methods: {
      getErrors()
      {
        let errors = {
          name: [],
          phone: [],
          country_code: [],
          email: [],
          username: [],
          avatar: [],
        };
        if(this.flashErrors.name)
        {
          this.flashErrors.name.map(item => {
            errors.name.push(this.$t(item))
          })
        }
        if(this.flashErrors.email)
        {
          this.flashErrors.email.map(item => {
            errors.email.push(this.$t(item))
          })
        }
        if(this.flashErrors.username)
        {
          this.flashErrors.username.map(item => {
            errors.username.push(this.$t(item))
          })
        }
        if(this.flashErrors.country_code)
        {
          this.flashErrors.country_code.map(item => {
            errors.country_code.push(this.$t(item))
          })
        }
        if(this.flashErrors.phone)
        {
          this.flashErrors.phone.map(item => {
            errors.phone.push(this.$t(item))
          })
        }
        this.errors = errors;
      },
      saveData() {
        const {email, name, phone , username, country_code} = this.user;
        const id = this.$auth.user.id;
        this.$apollo.mutate({
          mutation: require('~/apollo/mutation/updateUser.gql'),
          variables: {
            id,
            email,
            name,
            phone,
            username,
            country_code,
          },

        }).then(res => {
          console.log(res);
          this.$auth.setUser(res.data.account);
          this.message = {
            show: true,
            type: 'success',
            text: 'alerts.save_success'
          };
        }).catch(e => {
          let { graphQLErrors } = e;
          if (graphQLErrors[0].extensions.category === "validation") {
            this.flashErrors = graphQLErrors[0].extensions.validation;
          }
          this.getErrors();
          this.message = {
            show: true,
            type: 'error',
            text: 'alerts.save_error'
          };
        });
      },

      saveAvatar() {
        const {avatar} = this.user;
        this.$apollo.mutate({
          mutation: require('~/apollo/mutation/updateAvatar.gql'),
          variables: {
            avatar
          },
        }).then(res => {
          this.$auth.setUser(res.data);
          this.message = {
            show: true,
            type: 'success',
            text: 'alerts.save_success'
          };
        }).catch(res => {
          this.message = {
            show: true,
            type: 'error',
            text: 'alerts.save_error'
          };
        })
      },

      pickAvatar() {
        this.$refs.avatar.click()
      },
    }
  }
</script>

<style scoped>

</style>
