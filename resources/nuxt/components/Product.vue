<template>
  <v-card class="pa-2" rounded>
    <v-img
      v-if="grid"
      :alt="product.name"
      max-height="150px"
      :src="'/storage/' + JSON.parse(product.images)[0]"
    >

    </v-img>
    <v-row :class="grid ? 'pa-1' : 'pa-3'">
      <v-col :md="grid ? 12 : 8">
        <v-card-title class="pink--text">
          <v-spacer />
          {{ product.name }}
          <v-spacer />
        </v-card-title>
        <v-card-text class="text-center">
          {{ product.description.substring(0, 80) }}
        </v-card-text>
        <p class="text-center">
          <span> حتى الان </span>
          <span class="pink--text font-weight-black">{{ product.price }} ريال</span>
          <span>
        مزايدة: <span class="pink--text">{{ product.bids }}</span></span
          >
        </p>
        <p class="text-center">
          <span> اقل مبلغ للمزايدة </span>
          <span> {{ product.min_increment }} ريال </span>
          <span> ينتهي المزاد خلال </span>
        </p>
        <div v-if="diffDateStatus">
          <v-row justify="center" align-content="center" class="text-center">
            <v-col cols="12" md="3" >
              <v-chip dark color="blue-grey">
                {{ this.diffDays }}
              </v-chip>
              </br>
              <p class="text-center">يوم</p>
            </v-col>
            <v-col cols="12" md="3">
              <v-chip dark color="blue-grey">
                {{ this.diffHrs }}
              </v-chip>
              </br>
              <p class="text-center">ساعة</p>
            </v-col>
            <v-col cols="12" md="3">
              <v-chip dark color="blue-grey">
                {{ this.diffMin }}
              </v-chip>
              </br>
              <p class="text-center">دقيقة</p>
            </v-col>
            <v-spacer/>
          </v-row>
        </div>
        <div v-else class="text-center">
          <p>انتهى</p>
        </div>
        <v-card-actions>
          <v-spacer />
          <v-btn class="white--text pink-special-bg" nuxt :to="'/product/' + product.id" rounded>
            مزايدة
          </v-btn>
          <v-btn @click="addToFav()" icon color="red" v-if="$auth.loggedIn">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-col>
      <v-col md="4" v-if="!grid">
        <v-img
          :alt="product.name"
          :src="'/storage/' + JSON.parse(product.images)[0]"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Product',
  props: ['grid', 'product'],
  data() {
    return {
      diffDate: '',
      diffDateStatus: false,
      changed: false,
      diffMin: null,
      diffHrs: null,
      diffDays: null
    }
  },
  mounted() {
    this.$echo
      .channel('product.' + this.product.id)
      .listen('BidIncrease', (e) => {
        this.product.price = e.product.price
        this.product.bids = e.bids
        this.changed = true
        setInterval(() => {
          this.changed = false
        }, 3000)
        clearInterval()
      })
    this.diffDates()
    this.$options.interval = setInterval(this.diffDates, 60000)
  },

  methods: {
    diffDates() {
      const today = new Date()
      const Christmas = new Date(this.product.close_time)
      const diffMs = Christmas - today
      if (diffMs > 0) {
        const diffDays = Math.floor(diffMs / 86400000)
        this.diffDays = diffDays
        const diffHrs = Math.floor((diffMs % 86400000) / 3600000)
        this.diffHrs = diffHrs
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000)
        this.diffMin = diffMins
        this.diffDate =
          diffDays + ' days - ' + diffHrs + ' hours - ' + diffMins + ' min'
        this.diffDateStatus = true;
      } else {
        this.diffDate = 'انتهى'
      }
    },
    addToFav()
    {
      const product_id = this.product.id
      this.$apollo.mutate({
        mutation: require('~/apollo/mutation/addToFav'),
        variables: {
          product_id
        }
      }).then(res => {
        console.log(res.data.addToFav)
      })
    }
  }
}
</script>

<style scoped></style>
