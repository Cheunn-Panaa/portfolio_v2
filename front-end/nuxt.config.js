export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'front-end',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vuesax'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'nuxt-buefy',
      {
        defaultIconPack: 'fas',
        materialDesignIconsHRef:
          'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      },
    ],
    'nuxt-fontawesome',
    (global.HTMLImageElement =
      typeof window === 'undefined' ? Object : window.HTMLImageElement),
  ],

  fontawesome: {
    component: 'font-awesome-icon',
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Vue config
  watchers: {
    webpack: {
      poll: true,
    },
  },
}
