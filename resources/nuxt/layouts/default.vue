<template>
  <v-app light>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      app
      fixed
      dark
      color="pink darken-3"
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          nuxt
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevate-on-scroll color="white" light app>
      <v-container class="pa-0 fill-height">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          v-if="$vuetify.breakpoint.smAndDown"
        />
        <v-btn
          nuxt
          to="/"
          color="pink darken-3"
          class="font-weight-black pink-special-text"
          text
          >الرئيسية</v-btn
        >
        <v-btn nuxt to="/ads" class="font-weight-black pink-special-text" text
          >اعلانات ثابتة</v-btn
        >
        <v-btn
          nuxt
          to="/page/about-us"
          class="font-weight-black pink-special-text"
          text
          >من نحن</v-btn
        >
        <v-spacer />
        <nuxt-link to="/" class="pa-0">
          <v-img :src="'/logo.png'" width="100px" height="64px"></v-img>
        </nuxt-link>
        <v-spacer />
        <ProfileMenu />
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer color="white" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          :href="link.link"
          color="black"
          text
          taget="_blank"
          tag="a"
          rounded
          class="my-2"
        >
          <v-icon>mdi-{{ link.icon }}</v-icon>
        </v-btn>
        <v-col cols="12">
          <v-container style="background: url('/world.png');background-size: 100% 100%;">
            <v-row style="background: rgb(255 255 255 / 80%);">
              <v-col cols="12" md="6" sm="12">
                <v-card color="transparent" flat>
                  <v-img width="90px" src="/logo.png"></v-img>
                  <v-card-text>
                    شركة قطرية , توفر منصة موثوقة للمزاد الالكتروني تتيح من
                    خلالها عرض العقارات والأصول والسلع والمنتجات بغرض بيعها عن
                    طريق المزادات, وتتميز المنصة بالمرونة في البيع والشراء
                    الكترونياً وتهدف لافعال مبدأ العدالة والشفافية والنزاهة
                    وتكافؤ الفرص وبخضوع تام للعرض والطلب.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn rounded nuxt to="/page/about-us" class="white--text pink-special-bg">اعرف المزيد</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" sm="12">
                <v-card color="transparent" flat>
                  <v-card-title>اعرف عنا</v-card-title>
                  <v-card-text>
                    <v-btn tag="a" small nuxt to="/page/about-us" text
                      >من نحن ؟</v-btn
                    ><br />
                    <v-btn tag="a" small nuxt to="/page/privacy" text
                      >سياسة الخصوصية</v-btn
                    ><br />
                    <v-btn tag="a" small nuxt to="/terms" text
                      >شروط الاستخدام</v-btn
                    ><br />
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="3" sm="12">
                <v-card color="transparent" flat>
                  <v-card-title>روابط هامة</v-card-title>
                  <v-card-text>
                    <v-btn tag="a" small nuxt to="/how" text>كيفية العمل</v-btn
                    ><br />
                    <v-btn tag="a" small nuxt to="/questions" text
                      >اسئلة شائعة</v-btn
                    ><br />
                    <v-btn tag="a" small nuxt to="/ticket/list" text
                      >الدعم</v-btn
                    ><br />
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col class="py-4 text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>&copy; mazadak</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<style>
.v-btn {
  letter-spacing: normal;
}
.pink-special-text {
  color: #8e143a;
}
.pink-special-bg {
  background: rgb(181, 26, 87);
  background: linear-gradient(
    90deg,
    rgba(181, 26, 87, 1) 0%,
    rgba(128, 49, 80, 1) 100%
  );
}
</style>
<script>
import ProfileMenu from '../components/ProfileMenu'
import ChangeLang from '../components/ChangeLang'
export default {
  components: {
    ProfileMenu,
    ChangeLang
  },
  data() {
    return {
      links: [
        {
          icon: 'facebook',
          link: 'https://www.fb.com'
        },
        {
          icon: 'instagram',
          link: 'https://www.instagram.com'
        },
        {
          icon: 'twitter',
          link: 'https://www.twitter.com'
        }
      ],
      drawer: false,
      items: [{ title: 'blog', icon: 'mdi-help-box' }]
    }
  },
  computed: {
    auth() {
      return this.$auth.loggedIn
    }
  },
  mounted() {},
  methods: {}
}
</script>
