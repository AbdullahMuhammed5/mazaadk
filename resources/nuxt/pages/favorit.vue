<template>
  <v-container>
    <v-row v-if="favorits.length > 0" class="mt-5">
      <v-col v-for="favorit in favorits" cols="12" md="3">
        <product :grid="true" :product="favorit.product" />

      </v-col>
    </v-row>

    <v-card v-else class="mt-6" color="transparent" flat>
      <v-card-text class="text-center">
        <v-icon size="150">mdi-format-list-bulleted-type</v-icon>
        <h2>لا توجد مفضلة</h2>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Product from '../components/Product'
export default {
  name: 'favorit',
  components: { Product },
  data() {
    return {
      page: 1,
      favorits: []
    }
  },
  mounted() {
    this.getFavortis()
  },
  methods: {
    getFavortis() {
      this.$apollo
        .query({
          query: require('~/apollo/queries/myFavorit')
        })
        .then((res) => {
          this.favorits = res.data.myFavortis
        })
    }
  },
  middleware: 'auth'
}
</script>

<style scoped></style>
