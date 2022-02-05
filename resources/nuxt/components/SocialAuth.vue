<template>
  <v-layout>
    <v-spacer />
    <v-btn @click="socialLogin('google')" color="orange darken-4" dark class="ml-2 mr-2"><v-icon>mdi-google</v-icon></v-btn>
    <v-btn @click="socialLogin('facebook')" color="light-blue darken-4" dark class="ml-2 mr-2"><v-icon>mdi-facebook</v-icon></v-btn>
    <v-spacer />
  </v-layout>
</template>

<script>
    export default {
        name: "SocialAuth",
        methods: {
          socialLogin(provider)
          {
            this.$axios.post('/api/oauth/' + provider).then(res => {
              window.location.href = res.data.url;
            })
          }
        }
    }
</script>

<style scoped>

</style>
