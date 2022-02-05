<template>
  <section>
    <v-snackbar :color="message.color" v-model="message.activate">
      {{ message.text }}
      <v-btn @click="message.activate = false" color="white" icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-container>
      <v-toolbar class="mt-5" color="transparent" dense elevation="0" floating>
        <v-spacer />
        <v-btn-toggle class="ma-2">
          <v-btn @click="sortByPrice('higher')" small>
            <v-icon>mdi-menu-up</v-icon>
          </v-btn>
          <v-btn @click="sortByPrice('lower')" small>
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </v-btn-toggle>
        <v-btn-toggle class="ma-2">
          <v-btn @click="grid = false" small>
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
          <v-btn @click="grid = true" small>
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-toolbar>
      <v-row class="mt-6">
        <v-col
          :md="grid ? '3' : '12'"
          sm="6"
          v-for="product in products"
          cols="12"
        >
          <product :grid="grid" :product="product">
            <v-layout class="mt-2">
              <v-spacer />
              <v-btn
                v-if="
                  $auth.loggedIn &&
                    $auth.user.verified &&
                    $auth.user.id != product.user.id
                "
                @click="openBidDialog(product)"
                color="red"
                dark
                >{{ $t('bid') }}</v-btn
              >
              <v-btn
                v-if="$auth.loggedIn && !$auth.user.verified"
                color="red"
                nuxt
                to="/setting/profile"
                dark
                >{{ $t('bid') }}</v-btn
              >
              <v-btn
                v-if="!$auth.loggedIn"
                color="red"
                nuxt
                to="/auth/login"
                dark
                >{{ $t('bid') }}</v-btn
              >
              <v-spacer />
            </v-layout>
          </product>
        </v-col>
      </v-row>
      <v-pagination
        :length="pages"
        @input="getProducts"
        v-if="pages > 1"
        v-model="page"
      />
    </v-container>
    <v-dialog
      v-if="$auth.loggedIn && $auth.user.verified"
      v-model="bidDialog"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          {{ $t('bid') }}
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              :min="min_increment"
              v-model="increase"
              :rules="[
                (v) => !!v || $t('validation.required'),
                () => increase >= min_increment || 'zid chwi'
              ]"
              type="number"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="bidDialog = false" color="red" text>
            {{ $t('close') }}
          </v-btn>
          <v-btn
            @click="bid"
            :disabled="!valid"
            color="cyan"
            class="white--text"
            >{{ $t('continue') }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import Product from '../../components/Product'

export default {
  name: 'Index',
  components: { Product },
  data() {
    return {
      toggle_none: 1,
      page: 1,
      valid: true,
      pages: null,
      bidDialog: false,
      increase: null,
      min_increment: null,
      grid: true,
      products: [],
      product: {},
      productId: null,
      message: {
        activate: false,
        message: '',
        color: null
      }
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    openBidDialog(product) {
      this.productId = product.id
      this.increase = product.min_increment
      this.min_increment = product.min_increment
      this.bidDialog = true
    },
    bid() {
      const product_id = this.productId
      const increase = this.increase
      this.$apollo
        .mutate({
          mutation: require('~/apollo/mutation/bidIncrease'),
          variables: {
            product_id,
            increase
          }
        })
        .then((res) => {
          if (res.data.BidIncrease) {
            this.message = {
              activate: true,
              text: 'your bid submitted',
              color: 'success'
            }
            this.bidDialog = false
          }
        })
    },
    getProducts() {
      const page = this.page
      this.$apollo
        .query({
          query: require('~/apollo/queries/products'),
          variables: {
            page
          }
        })
        .then((res) => {
          this.products = res.data.products.data
          this.pages = res.data.products.paginatorInfo.lastPage
        })
    },
    sortByPrice(type) {
      const byPrice = this.products.slice(0)
      byPrice.sort(function(a, b) {
        if (type === 'lower') {
          return a.price - b.price
        } else {
          return b.price - a.price
        }
      })
      this.products = byPrice
    }
  }
}
</script>

<style scoped></style>
