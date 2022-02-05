<template>
  <v-container>
    <v-card flat class="pink-special-bg">
      <v-card-text>
        <div class="pa-8">
          <v-layout align-center row>
            <v-text-field
              dark
              :label="$t('search')"
              v-model="query"
              v-on:keyup.enter="search"
            >
              <template v-slot:append>
                <v-icon @click="search">mdi-magnify</v-icon>
              </template>
            </v-text-field>
          </v-layout>
        </div>
      </v-card-text>
    </v-card>
    <v-row v-if="products.length > 0" class="mt-5">
      <v-col v-for="product in products" cols="12" md="3">
        <product :grid="true" :product="product" />
      </v-col>
    </v-row>

    <v-card v-else class="mt-6" color="transparent" flat>
      <v-card-text class="text-center">
        <v-icon size="150">mdi-format-list-bulleted-type</v-icon>
        <h2>لا توجد مزادات</h2>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Product from '../components/Product'
export default {
  name: 'Search',
  components: { Product },
  data() {
    return {
      query: '',
      page: 1,
      products: [],
      message: {
        activate: false,
        message: '',
        color: null
      }
    }
  },
  methods: {
    search() {
      const query = this.query

      this.$apollo
        .mutate({
          mutation: require('~/apollo/mutation/search'),
          variables: {
            query
          }
        })
        .then((res) => {
          this.products = res.data.search
        })
    }
  }
}
</script>

<style scoped></style>
