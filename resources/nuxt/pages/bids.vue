<template>
  <v-container>
    <v-row v-if="bids.length > 0">
      <v-col cols="12" md="3" v-for="bid in bids">
        <v-card height="100%" nuxt :to="'/product/' + bid.product.id">
          <v-img max-height="150px" :src="'/storage/' + JSON.parse(bid.product.images)[0]" />
          <v-card-title>{{ bid.product.name }}</v-card-title>
          <v-card-text>
            <p class="green--text">{{ bid.product.price }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card v-else class="mt-6" color="transparent" flat>
      <v-card-text class="text-center">
        <v-icon size="150">mdi-format-list-bulleted-type</v-icon>
        <h2>لا توجد مزايدات</h2>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'bids',
  data() {
    return {
      bids: []
    }
  },
  mounted() {
    this.$apollo
      .query({
        query: require('~/apollo/queries/myBids')
      })
      .then((res) => {
        console.log(res.data)
        this.bids = res.data.myBids
      })
  },
  middleware: 'auth'
}
</script>

<style scoped>

</style>
