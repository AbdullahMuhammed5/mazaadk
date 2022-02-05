<template>
  <section>
    <messages />
    <div v-if="bids.length === 0" class="mt-12 mb-12">
      <v-layout>
        <v-spacer />
        <v-icon size="200" color="cyan-grey lighten-4"
          >mdi-format-list-text</v-icon
        >
        <v-spacer />
      </v-layout>
      <h3 class="cyan-grey--text text--lighten-4 text-center">
        لا تملك اي مزايدات
      </h3>
      <v-layout>
        <v-spacer />
        <v-btn text color="pink darken-3" nuxt to="/products"
          >تصفح المزادات</v-btn
        >
        <v-btn text color="pink darken-3" nuxt to="/products/new"
          >انشئ مزاد</v-btn
        >
        <v-spacer />
      </v-layout>
    </div>
    <v-container>
      <v-row v-if="bids">
        <v-col v-for="bid in bids" cols="12" md="3">
          <v-card :to="'/product/' + bid.product.id" height="100%" nuxt>
            <v-img
              :src="'/storage/' + JSON.parse(bid.product.images)[0]"
              max-height="150px"
            />
            <v-card-title>{{ bid.product.name }}</v-card-title>
            <v-card-text>
              <p class="green--text">{{ bid.product.price }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Messages from '../components/Messages'
export default {
  name: 'Home',
  components: { Messages },
  head() {
    return {
      title: 'home'
    }
  },
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

<style scoped></style>
