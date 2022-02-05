<template>
  <v-container>

    <v-banner elevation="2" class="mt-2" single-line v-if="!me.phone">
      <v-avatar
        color="deep-purple accent-4"
        size="40"
        slot="icon"
      >
        <v-icon
          color="white"
          icon="mdi-phone"
        >
          mdi-phone
        </v-icon>
      </v-avatar>
      {{ $t('messages.missed_phone') }}
      <template v-slot:actions>
        <v-btn color="deep-purple accent-4" nuxt text to="/setting">استمرار</v-btn>
      </template>
    </v-banner>

    <v-banner elevation="2" class="mt-2" single-line v-if="me.phone && !me.phone_verified_at">
      <v-avatar
        color="deep-purple accent-4"
        size="40"
        slot="icon"
      >
        <v-icon
          color="white"
          icon="mdi-phone"
        >
          mdi-phone
        </v-icon>
      </v-avatar>
      {{ $t('messages.unverified_phone') }}
      <template v-slot:actions>
        <phone-verification />
      </template>
    </v-banner>

    <v-banner elevation="2" class="mt-2" single-line v-if="!me.email_verified_at">
      <v-avatar
        color="orange"
        size="40"
        slot="icon"
      >
        <v-icon
          color="white"
        >
          mdi-email
        </v-icon>
      </v-avatar>
      {{ $t('messages.unverified_email') }}
      <template v-slot:actions>
        <v-btn color="orange" nuxt text to="/setting/profile">تأكد</v-btn>
      </template>
    </v-banner>

  </v-container>
</template>

<script>
    import PhoneVerification from "./phoneVerification";
    export default {
      name: "Messages",
      components: {PhoneVerification},
      computed:
        {
          me() {
            return this.$auth.user
          }
        },
    }
</script>

<style scoped>

</style>
