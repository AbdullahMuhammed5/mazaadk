<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="12">
          <v-card max-height="350px" class="pink-special-bg" rounded>
            <v-carousel
              v-model="model"
              :continuous="false"
              :show-arrows="false"
              cycle
              hide-delimiter-background
              delimiter-icon="mdi-minus"
            >
              <v-carousel-item v-for="slide in sliders" :key="slide.id">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-img :src="'/storage/' + slide.image" width="100%">
                    </v-img>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="pa-5">
                      <h1 class="mt-5">{{ slide.title }}</h1>
                      <h2 class="mt-4">{{ slide.description }}</h2>
                      <v-layout class="mt-3">
                        <v-spacer />
                        <v-btn
                          :href="slide.link"
                          color="white"
                          class="pink--text"
                          tag="a"
                          target="_blank"
                        >
                          اطلبها الان
                        </v-btn>
                        <v-spacer />
                      </v-layout>
                    </div>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-card dark height="350px" rounded class="pink-special-bg">
            <div v-if="ad" class="white--text">
              <v-img
                :alt="ad.product.name"
                max-height="150px"
                :src="'/storage/' + JSON.parse(ad.product.images)[0]"
              />
              <v-card-title class="white--text">
                <v-spacer />
                {{ ad.product.name }}
                <v-spacer />
              </v-card-title>
              <p class="text-center">
                <span> حتى الان </span>
                <span class="pink--text font-weight-black"
                  >{{ ad.product.price }} ريال</span
                >
                <span>
                  مزايدة:
                  <span class="pink--text">{{ ad.product.bids }}</span></span
                >
              </p>
              <p class="text-center">
                <span> اقل مبلغ للمزايدة </span>
                <span> {{ ad.product.min_increment }} ريال </span>
                <span> ينتهي المزاد خلال </span>

              </p>
              <v-card-actions>
                <v-spacer />
                <v-btn color="white" class="pink-special-text" nuxt :to="'/product/' + ad.product.id" rounded>
                  مزايدة
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div class="pl-2 pr-2 ma-4" style="border-right: 4px solid #ad1457">
        <h2 class="pink-special-text">مرحبا بك</h2>
        <p class="grey--text">مزايدات و عروض رائعة بانتظارك نتمنى لك التوفيق</p>
      </div>
      <v-row class="mt-4" justify="center" align-content="center">
        <v-col v-for="category in categories" cols="12" md="3" sm="6">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :color="hover ? 'pink darken-3' : 'pink darken-3'"
              :elevation="hover ? 12 : 4"
              :flat="!hover"
              :to="'/products/' + category.id"
              height="100%"
              rounded
              nuxt
            >
              <v-sheet color="white" class="pa-3" rounded>
                <div style="height: 175px">
                  <v-img
                    :src="'/storage/' + category.image"
                    max-height="175px"
                    width="100%"
                  ></v-img>
                </div>
                <v-card-title class="pink--text">
                  <v-spacer />
                  {{ category.name }}
                  <v-spacer />
                </v-card-title>
              </v-sheet>
              <v-card-actions height="80px" class="white--text pa-1">
                <p class="pa-0 ma-1 font-weight-black">
                  <v-icon color="white">mdi-gavel</v-icon>
                  <span>مزايدات</span>
                </p>
                <v-spacer />
                <p class="font-weight-black ma-1 pa-0">
                  {{ category.products }}
                </p>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col>
          <v-card
            :color="hover ? 'pink darken-3' : 'pink darken-3'"
            :elevation="hover ? 12 : 4"
            :flat="!hover"
            :to="'/products/'"
            height="100%"
            rounded
            nuxt
          >
            <v-sheet color="white" rounded>
              <v-layout style="height: 175px">
                <v-spacer />
                <v-icon color="pink darken-3" size="100">mdi-apps</v-icon>
                <v-spacer />
              </v-layout>
              <v-card-title class="pink--text">
                <v-spacer />
                أخرى
                <v-spacer />
              </v-card-title>
            </v-sheet>
            <v-card-actions height="80px" class="white--text pa-1">
              <p class="pa-0 ma-1 font-weight-black">
                <v-icon color="white">mdi-gavel</v-icon>
                <span>مزايدات</span>
              </p>
              <v-spacer />
              <p class="font-weight-black ma-1 pa-0">7</p>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align-content="center" style="margin-top: 160px">
        <v-col>
          <v-card class="pink-special-bg" dark height="250px">
            <v-row justify="center" align-content="center">
              <v-col cols="12" md="6">
                <v-img src="/man.png" style="margin-top: -140px" />
              </v-col>
              <v-col cols="12" md="6">
                <div class="pa-7">
                  <h2 class="mt-5">
                    هل ترغب في تحقيق الأرباح؟ سجل بمزادك الان
                  </h2>
                  <h3 class="mt-4">
                    مزادك هو اكبر منصة بقطر للمزايدة اونلاين سجل الان .. اضف
                    منتجاتك .. حقق ارباحك
                  </h3>
                  <v-layout>
                    <v-spacer />
                    <v-btn
                      class="pink--text"
                      color="white"
                      nuxt
                      to="/auth/register"
                    >
                      سجل الان</v-btn
                    >
                    <v-spacer />
                  </v-layout>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  layout: 'app',
  apollo: {
    categories: {
      query: require('~/apollo/queries/categories')
    }
  },
  data() {
    return {
      model: 0,
      sliders: null,
      ad: null
    }
  },
  mounted() {
    this.getSliders()
    this.getAd()
  },
  methods: {
    getAd() {
      this.$apollo
        .query({
          query: require('~/apollo/queries/ad')
        })
        .then((res) => {
          this.ad = res.data.ad
        })
    },
    getSliders() {
      this.$apollo
        .query({
          query: require('~/apollo/queries/sliders')
        })
        .then((res) => {
          this.sliders = res.data.sliders
        })
    }
  }
}
</script>
