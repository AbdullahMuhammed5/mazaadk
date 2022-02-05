<template>
  <v-container>
    <v-card v-if="post">
      <v-card-title>
        <v-spacer />
          {{ post.title }}
        <v-spacer />
      </v-card-title>
      <v-divider class="mt-4 mb-4" />
      <v-img :src="'/storage/' + post.image"/>
      <v-card-text class="black--text" v-html="post.body" />
    </v-card>
  </v-container>
</template>

<script>
    export default {
        name: "_slug",
        middleware: "guest",
        head()
        {
          return {
            title: this.post.title,
          }
        },
        data()
        {
          return {
            post: null,
          }
        },
        mounted() {
          this.getPost()
        },
        methods: {
          async getPost()
          {
            let id = this.$route.params.id;

            return this.$apollo.query({
              query: require('~/apollo/queries/post'),
              variables: {
                id
              }
            }).then(res => {
              console.log(res.data);
              this.post = res.data.post;
            });
          }

        }
    }
</script>

<style scoped>

</style>
