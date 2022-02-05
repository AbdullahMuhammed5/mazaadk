export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  srcDir: 'resources/nuxt',
  vue: {
    config: {
      productionTip: true,
      devtools: false,
      silent: true,
      performance: true
    }
  },
  baseURL: '',
  head: {
    titleTemplate: '%s - ' + 'مزادك للمزادات',
    title: 'مزادك للمزادات',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'شركة قطرية  , توفر منصة موثوقة للمزاد الالكتروني تتيح من خلالها عرض العقارات والأصول والسلع والمنتجات بغرض بيعها عن طريق المزادات, وتتميز المنصة بالمرونة في البيع والشراء الكترونياً وتهدف لافعال مبدأ العدالة والشفافية والنزاهة وتكافؤ الفرص وبخضوع تام للعرض والطلب.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/materialdesignicons.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0f6eee' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/laravel-echo'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { icon: true, manifest: true }],
    '@nuxtjs/apollo',
    'nuxt-i18n',
    '@nuxtjs/auth'
  ],

  echo: {
    broadcaster: 'pusher',
    key: 'b993d3ddaa663ba23963',
    cluster: 'eu'
  },
  // apollo
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://www.mazad.io/api',
        browserHttpEndpoint: '/api'
      }
    }
  },
  // vuetify
  vuetify: {
    rtl: true,
    theme: {
      dark: false
    },
    defaultAssets: false
  },
  // multi lang
  i18n: {
    baseUrl: '/',
    parsePages: false,
    seo: false,
    defaultLocale: 'ar',
    fallbackLocale: 'ar',
    detectBrowserLanguage: false,
    locales: [
      {
        name: 'العربية',
        code: 'ar',
        iso: 'ar-ar',
        file: 'ar.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'ar'
    },
    onLanguageSwitched: (previous, current) => {
      if (process.client) {
        const DATE = new Date()
        DATE.setTime(DATE.getTime() + 365 * 24 * 3600 * 1000)
        document.cookie =
          'lang=' + current + '; path=/; expires=' + DATE.toUTCString()
      }
    }
  },

  auth: {
    cookie: {
      prefix: 'auth'
    },
    localStorage: false,
    redirect: {
      login: '/auth/login',
      home: '/home'
    },
    strategies: {
      local: {
        endpoints: {
          login: false,
          logout: false,
          user: { url: '/api/user', method: 'get', propertyName: 'user' }
        }
      }
    },
    watchLoggedIn: true,
    useApollo: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: '/',
    credentials: true
  },

  workbox: {
    offline: true,
    autoRegister: true
  },
  manifest: {
    name: 'mazad',
    short_name: 'mazad',
    start_url: '/',
    lang: 'ar'
  },

  /*
   *  generate folder change
   * */
  generate: {
    dir: 'public'
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
    }
  }
}
