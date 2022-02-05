<template>
  <section>
    <v-snackbar :color="message.color" v-model="message.activate">
      {{ message.text }}
      <v-btn @click="message.activate = false" color="white" icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-skeleton-loader
            :loading="loading"
            class="mx-auto"
            max-width="300"
            type="card"
          >
            <v-card class="mx-auto" max-width="444">
              <v-system-bar lights-out></v-system-bar>
              <v-carousel
                v-model="carousel"
                :continuous="false"
                delimiter-icon="mdi-minus"
                hide-delimiter-background
              >
                <v-carousel-item
                  :key="i"
                  v-for="img in JSON.parse(product.images)"
                >
                  <v-img
                    :alt="product.name"
                    :src="'/storage/' + img"
                    width="100%"
                  />
                </v-carousel-item>
              </v-carousel>
              <v-slide-group
                v-model="carousel"
                center-active
                class="pa-2 mt-2"
                show-arrows
              >
                <v-slide-item
                  :key="key"
                  v-for="(item, key) in JSON.parse(product.images)"
                  v-slot:default="{ active, toggle }"
                >
                  <v-card
                    :color="active ? 'pink darken-3' : 'grey lighten-1'"
                    @click="toggle"
                    class="ma-2"
                    height="75"
                    width="75"
                  >
                    <v-avatar size="75" tile>
                      <v-img :src="'/storage/' + item">
                        <v-overlay v-if="active" absolute />
                      </v-img>
                    </v-avatar>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-card>
          </v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="8">
          <v-skeleton-loader :loading="loading" class="ma-1" type="article">
            <v-card class="pa-4">
              <h1 class="pink--text">
                {{ product.name }}
              </h1>
              <v-card-text>
                <h3>{{ $t('description') }}</h3>
                <p>{{ product.description }}</p>

                <small class="mt-3">{{ $t('detail') }}</small>
                <v-simple-table dense>
                  <template v-slot:default>
                    <tbody>
                      <tr v-for="(value, key) in product.features">
                        <td>{{ key }}</td>
                        <td>{{ value }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
              <v-card flat color="transparent">
                <v-card-text>
                  <v-row v-if="!loading">
                    <v-col cols="12" md="6" sm="6">
                      <h4>{{ $t('current_price') }}</h4>
                      <h4 :class="changed ? 'red--text' : 'pink--text'">
                        {{ product.price }} ريال
                      </h4>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                      <h4>{{ $t('min_increment') }}</h4>
                      <h4 class="pink--text">
                        {{ product.min_increment }} ريال
                      </h4>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                      <h4>{{ $t('bids') }}</h4>
                      <h4
                        :class="changed ? 'red--text' : 'pink--text'"
                        v-text="product.bids"
                      ></h4>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                      <h4>{{ $t('end_time') }}</h4>
                      <h4 v-if="diffDate">{{ diffDate }}</h4>
                      <h4 v-else>انتهى</h4>
                    </v-col>
                  </v-row>
                  <v-layout v-if="!loading" class="mt-1 mb-1">
                    <v-spacer />
                    <v-btn @click="pay" v-if="win && ended" color="success"
                      >ادفع</v-btn
                    >
                    <v-spacer />
                  </v-layout>
                  <v-layout v-if="!loading">
                    <v-spacer />
                    <v-chip v-if="win" color="success">{{ $t('win') }}</v-chip>
                    <div v-else>
                      <v-btn
                        @click="openBidDialog()"
                        v-if="
                          $auth.loggedIn &&
                            $auth.user.verified &&
                            $auth.user.id != product.user.id &&
                            !win
                        "
                        color="red"
                        dark
                        >bid now
                      </v-btn>
                      <v-btn
                        v-if="$auth.loggedIn && !$auth.user.verified"
                        color="pink darken-3"
                        dark
                        nuxt
                        to="/setting/profile"
                        >مزايدة الان
                      </v-btn>
                      <v-btn
                        v-if="!$auth.loggedIn"
                        color="pink darken-3"
                        dark
                        nuxt
                        to="/auth/login"
                        >{{ $t('bid') }}</v-btn
                      >
                    </div>
                    <v-spacer />
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-card>
          </v-skeleton-loader>
        </v-col>
      </v-row>
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
              :rules="[
                (v) => !!v || $t('validation.required'),
                () => increase >= min_increment || 'min: ' + this.min_increment
              ]"
              v-model="increase"
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
            :disabled="!valid"
            @click="bid"
            class="white--text"
            color="cyan"
            >{{ $t('continue') }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  name: 'Id',
  data() {
    return {
      changed: false,
      product: {},
      productId: this.$route.params.id,
      loading: true,
      myBid: {},
      carousel: null,
      diffDate: null,
      message: {
        activate: false,
        message: '',
        color: null
      },
      bidDialog: false,
      increase: null,
      min_increment: null,
      valid: true
    }
  },
  computed: {
    win() {
      if (this.product && this.myBid) {
        if (this.product.price === this.myBid.price) {
          return true
        }
      }
    },
    ended() {
      if (!this.diffDate) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    this.getProduct()
  },
  methods: {
    diffDates() {
      const today = new Date()
      const Christmas = new Date(this.product.close_time)
      const diffMs = Christmas - today
      if (diffMs > 0) {
        const diffDays = Math.floor(diffMs / 86400000)
        const diffHrs = Math.floor((diffMs % 86400000) / 3600000)
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000)
        this.diffDate =
          diffDays + ' أيام - ' + diffHrs + ' ساعة - ' + diffMins + ' دقيقة'
      } else {
        this.diffDate = false
      }

      // this.diffDate = 'ended';
    },
    openBidDialog() {
      this.increase = this.product.min_increment
      this.min_increment = this.product.min_increment
      this.bidDialog = true
    },
    bid() {
      const product_id = this.product.id
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
            this.myBid = increase
            this.message = {
              activate: true,
              text: 'your bid submitted',
              color: 'success'
            }
            this.bidDialog = false
          }
        })
    },
    getProduct() {
      const id = this.productId
      this.$apollo
        .query({
          query: require('~/apollo/queries/product'),
          variables: {
            id
          }
        })
        .then((res) => {
          this.product = res.data.product
          this.product.features = JSON.parse(res.data.product.features)
          this.product.images = JSON.parse(res.data.product.images)
          this.diffDates()
          this.$echo
            .channel('product.' + this.product.id)
            .listen('BidIncrease', (e) => {
              console.log(e)
              this.product.price = e.product.price
              this.product.bids = e.bids
              this.changed = true
              setInterval(() => {
                this.changed = false
              }, 3000)
              clearInterval()
            })
          this.getBid()
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.loading = false
        })
    },
    getBid() {
      if (this.$auth.loggedIn) {
        const id = this.product.id
        this.$apollo
          .query({
            query: require('~/apollo/queries/myBid'),
            variables: {
              id
            }
          })
          .then((res) => {
            this.myBid = res.data.myBid
          })
      }
    },
    pay() {
      const product_id = this.productId
      this.$apollo
        .mutate({
          mutation: require('~/apollo/mutation/payment'),
          variables: {
            product_id
          }
        })
        .then((res) => {
          if (res.data.payment !== false) {
            window.location.href = res.data.payment
          }
        })
    }
  }
}
</script>

<style scoped></style>
