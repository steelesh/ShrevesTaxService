// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    ['@nuxt/ui', { ui: { global: true } }],
    ['@nuxtjs/eslint-module', { lintOnStart: false }],
    ['@nuxtjs/stylelint-module', { lintOnStart: false }],
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts'
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
  fontMetrics: {
    fonts: ['Inter']
  }
});
