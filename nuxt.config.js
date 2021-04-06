module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '跑跑体育',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',type: 'text/css', href: '/swiper/swiper.min.css'}
    ],
    script: [
      { src: '/swiper/swiper.min.js'},
      { src: 'https://unpkg.com/scrollreveal'}
    ]
  },
  router: {
    //  linkExactActiveClass : 'header-nav-selected-active'
  },
  css: ['~assets/css/normalize.css','~assets/css/common.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  // axios配置
  // axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  //   proxy: true, // 表示开启代理
  //   prefix: '/api', // 表示给请求url加个前缀 /api
  //   credentials: true, // 表示跨域请求时是否需要使用凭证
  //   basePath: 'http://121.196.17.191:8002'
  // },
  // 本地代理配置
  // proxy: {
  //   '/api': {
  //       target: 'http://121.196.17.191:8002', // 目标接口域名
  //       changeOrigin: true, // 表示是否跨域
  //       pathRewrite: {
  //         '^/api': '', // 把 /api 替换成‘’
  //       }
  //   }
  // },
  proxy: {
    "/api": "http://localhost:3000"
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ["axios"],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
