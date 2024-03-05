// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    ['@nuxt/ui', { ui: { global: true } }],
    ['@nuxtjs/eslint-module', { lintOnStart: false }],
    ['@nuxtjs/stylelint-module', { lintOnStart: false }],
    'nuxt-security',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/seo'
  ],
  site: {
    url: 'https://shrevestaxservice.com',
    name: "Shreve's Tax Service",
    description:
      "Shreve's Tax Service is a family-owned tax preparation and financial planning office in Zanesville, Ohio that specializes in providing personalized and expert tax services."
  },
  routeRules: {
    '/api/sendEmail': {
      security: {
        rateLimiter: {
          tokensPerInterval: 3,
          interval: 300000,
          headers: true,
          throwError: true
        }
      }
    }
  },
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  colorMode: {
    preference: 'light'
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
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
      meta: [
        { name: 'msapplication-TileColor', content: '#ffffff' },
        {
          name: 'msapplication-config',
          content: './favicon/browserconfig.xml'
        },
        { name: 'theme-color', content: '#ffffff' },
        {
          name: 'keywords',
          content:
            'tax service, tax preparation, IRS, E-File Provider, Zanesville, Wendy Shreve'
        },
        {
          name: 'author',
          content: "Shreve's Tax Service"
        }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: './favicon/apple-touch-icon.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: './favicon/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: './favicon/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: './favicon/favicon-16x16.png'
        },
        {
          rel: 'mask-icon',
          href: './favicon/safari-pinned-tab.svg',
          color: '#000000'
        },
        {
          rel: 'shortcut icon',
          href: './favicon/favicon.ico'
        },
        {
          rel: 'manifest',
          href: './favicon/site.webmanifest'
        }
      ]
    }
  },
  fontMetrics: {
    fonts: ['Inter']
  }
});
