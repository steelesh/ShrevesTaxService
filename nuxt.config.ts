// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    ['@nuxt/ui', { ui: { global: true } }],
    ['@nuxtjs/eslint-module', { lintOnStart: false }],
    ['@nuxtjs/stylelint-module', { lintOnStart: false }],
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  colorMode: {
    preference: 'dark'
  },
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/reset.css'],
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700]
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: { lang: 'en-US' },
      viewport:
        'width=device-width, initial-scale=0, maximum-scale=1, user-scalable=no',
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        {
          name: 'msapplication-config',
          content: '/favicon/browserconfig.xml'
        },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png'
        },
        {
          rel: 'mask-icon',
          href: '/favicon/safari-pinned-tab.svg',
          color: '#000000'
        },
        {
          rel: 'shortcut icon',
          href: '/favicon/favicon.ico'
        },
        {
          rel: 'manifest',
          href: '/favicon/site.webmanifest'
        }
      ]
    }
  },
  fontMetrics: {
    fonts: ['Inter']
  }
});
