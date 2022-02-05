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
          text: 'Billing',
          to: '/setting/billing',
        },
        ]">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-card>
      <v-card-title>{{ $t('billing') }}</v-card-title>
      <v-card-text>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: "billing",
    middleware: 'auth',
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
  }
</script>

<style scoped>

</style>
