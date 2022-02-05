<template>
  <v-container fluid>
    <v-card flat color="transparent" v-if="page">
      <v-card-title class="headline">
        <v-spacer/>
        {{ page.title }}
        <v-spacer/>
      </v-card-title>
      <v-card-text v-html="page.body"/>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: "_slug",
    head() {
      return {
        title: this.page.title,
        meta: [
          {hid: 'description', name: 'description', content: this.page.meta_description},
          {hid: 'keywords', name: 'keywords', content: this.page.meta_keywords},
        ]
      }
    },
    data() {
      return {
        page: {}
      }
    },
    mounted() {
      this.getPage()
    },
    methods: {
      getPage() {
        const slug = this.$route.params.slug;
        this.$apollo.query({
          query: require("~/apollo/queries/page"),
          variables: {
            slug
          }
        }).then(res => {
          this.page = res.data.page;
        }).catch(e => {
        });
      }
    }
  }
</script>

<style scoped>

</style>
