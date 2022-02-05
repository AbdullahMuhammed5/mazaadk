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
    <v-breadcrumbs :items="[
          {
          text: 'Setting',
          to: '/setting',
        },
        {
          text: 'Password',
          to: '/setting/password',
        },
        ]">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-card>
      <v-card-title>{{ $t('change_password') }}</v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            :label="$t('auth.current_password')"
            :rules="[(v) => !!v || $t('validation.required')]"
            prepend-icon="mdi-security"
            type="password"
            v-model="fields.current_password"
          />
          <v-divider/>
          <v-text-field
            :label="$t('auth.password')"
            :rules="[(v) => !!v || $t('validation.required')]"
            color="primary"
            prepend-icon="mdi-lock"
            type="password"
            v-model="fields.password"
          />

          <v-text-field
            :label="$t('auth.confirm_password')"
            :rules="[(v) => !!v || $t('validation.required') , (v) => (this.fields.password === this.fields.password_confirmation) || $t('validation.confirm_password')]"
            color="primary"
            prepend-icon="mdi-lock"
            type="password"
            v-model="fields.password_confirmation"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn :disabled="valid" @click="save" class="white--text" color="cyan">{{ $t('save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: "password",
    middleware: "auth",
    head() {
      return {
        title: this.$t('auth.change_password'),

      }
    },
    data() {
      return {
        valid: false,
        fields: {
          current_password: '',
          password: '',
          password_confirmation: '',
        },
        message: {
          show: false,
          type: '',
          text: '',
        },
      }
    },
    methods: {
      save() {
        const {current_password, password} = this.fields;

        this.$apollo.mutate({
          mutation: require("~/apollo/mutation/changePassword.gql"),
          variables: {
            current_password,
            password
          },
        }).then(res => {
          this.message = {
            show: true,
            type: 'success',
            text: 'alerts.save_success'
          };
        }).catch(e => {
          this.message = {
            show: true,
            type: 'error',
            text: 'alerts.save_error'
          };
        })
      }
    }
  }
</script>

<style scoped>

</style>
