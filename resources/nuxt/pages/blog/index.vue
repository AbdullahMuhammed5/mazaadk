<template>
  <v-container>
    <v-row v-if="!loading">
      <v-col cols md="4" sm="12" v-for="post in posts">
        <v-card class="h-100">
          <v-img
            :src="'/storage/' + post.image" :alt="post.title"/>
          <!--<v-list-item>
            <v-list-item-avatar color="grey" >
              <v-img :src="'/storage/' + post.author.avatar" :alt="post.author.name"/></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline" v-text="post.title" />
              <v-list-item-subtitle v-text="post.author.name" />
            </v-list-item-content>
          </v-list-item>-->
          <v-card-text v-text="post.excerpt"/>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="blue" nuxt :to="'/blog/' + post.id">{{ $t('read_more') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      :length="paginatorInfo.lastPage"
      @input="getPosts()"
      v-if="paginatorInfo.lastPage > 1"
      v-model="page"
    />
  </v-container>
</template>

<script>
  export default {
    name: "index",
    head() {
      return {
        title: this.$t('blog'),
      }
    },
    data()
    {
      return {
        page: 1,
        posts: [],
        paginatorInfo: {},
        loading: true,
      }
    },
    mounted() {
      this.getPosts()
    },
    methods: {
      getPosts()
      {
        let page = this.page;
        console.log(page);
        this.$apollo.query({
          query: require("~/apollo/queries/posts"),
          variables: {
            page
          },
        }).then(res => {
          this.posts = res.data.posts.data;
          this.paginatorInfo = res.data.posts.paginatorInfo
        }).catch(e => {

        }).finally(() => {
          this.loading = false;
        });
      },
    }
  }
</script>

<style scoped>

</style>
