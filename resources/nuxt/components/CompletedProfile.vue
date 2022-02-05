<template>
  <v-banner elevation="2" single-line v-if="!me.verified">
    <v-avatar
      slot="icon"
      color="deep-purple accent-4"
      size="40"
    >
      <v-icon
        icon="mdi-phone"
        color="white"
      >
        mdi-check-circle
      </v-icon>
    </v-avatar>
    {{ $t('messages.uncompleted') }}
    <template v-slot:actions>
      <v-btn text color="deep-purple accent-4" nuxt to="/setting/complete">Continue</v-btn>
    </template>
  </v-banner>
</template>

<script>
    export default {
        name: "CompletedProfile",
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
