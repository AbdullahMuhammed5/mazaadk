<template>
  <v-container>
    <v-timeline dense clipped>
      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span>حسابك
          <v-chip color="green" label dark v-if="me.verified">مؤكد</v-chip>
          <v-chip color="red" label dark v-else>غير مؤكد</v-chip>
        </span>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        :color="me.email_verified_at ? 'green': 'cyan'"
        icon="mdi-mail"
        fill-dot
        small
      >
        تأكيد البريد الالكتروني
        <v-chip color="green" label dark v-if="me.email_verified_at">مؤكد</v-chip>
        <v-chip color="amber" label dark v-else>قيد الانتظار</v-chip>
      </v-timeline-item>
      <v-timeline-item
        class="mb-4"
        hide-dot
      >
        <email-verification />
      </v-timeline-item>
      <v-timeline-item
        class="mb-4"
        :color="me.phone_verified_at ? 'green': 'cyan'"
        icon="mdi-phone"
        fill-dot
        small
      >
        تأكيد الهاتف
        <v-chip color="green" label dark v-if="me.phone_verified_at">مؤكد</v-chip>
        <v-chip color="amber" label dark v-else>قيد الانتظار</v-chip>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        hide-dot
        v-if="!me.phone_verified_at"
      >
        <phone-verification />
      </v-timeline-item>


    </v-timeline>
  </v-container>
</template>

<script>
    import PhoneVerification from "../../components/phoneVerification";
    import EmailVerification from "../../components/emailVerification";
    export default {
        name: "profile",
      components: { EmailVerification, PhoneVerification},
      middleware: "auth",
        computed: {
          me()
          {
            return this.$auth.user
          }
        }
    }
</script>

<style scoped>

</style>
