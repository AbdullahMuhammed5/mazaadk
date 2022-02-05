<template>
  <v-container>
    <v-row v-if="ads.length > 0" class="mt-5">
      <v-col v-for="ad in ads" cols="12" md="3">
        <product :grid="true" :product="ad.product" />
      </v-col>
    </v-row>

    <v-card v-else class="mt-6" color="transparent" flat>
      <v-card-text class="text-center">
        <v-icon size="150">mdi-format-list-bulleted-type</v-icon>
        <h2>لا توجد اعلانات</h2>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Product from '../components/Product'
export default {
  name: 'Ads',
  components: { Product },
  data() {
    return {
      page: 1,
      ads: []
    }
  },
  mounted() {
    this.getAds()
  },
  methods: {
    getAds() {
      this.$apollo
        .query({
          query: require('~/apollo/queries/ads')
        })
        .then((res) => {
          this.ads = res.data.ads
        })
    }
  }
}
</script>

<style scoped></style>
