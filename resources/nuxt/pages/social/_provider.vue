<template>
</template>

<script>
    export default {
        name: "_provider",
      data()
        {
          return {
            loading: true,
          }
        },
        mounted() {
          console.log(this.$route.query.token);
          this.$auth.setStrategy('local');
          this.$auth.setToken('local', 'Bearer ' + this.$route.query.token);
          this.$axios.setToken(this.$route.query.token,'Bearer');
          this.$apolloHelpers.onLogin(this.$route.query.token);
          this.$axios.get('/api/user').then(res => {
            this.$auth.setUser(res.data.user);
            this.$router.push('/');
          });
        }
    }
</script>

<style scoped>

</style>
