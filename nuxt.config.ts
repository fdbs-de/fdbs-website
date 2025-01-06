export default defineNuxtConfig({
  vite: {
      css: {
          preprocessorOptions: {
              sass: {
                  api: 'modern',
              },
          },
      },
  },

  css: [
      '~/assets/css/app.sass',
  ],

  modules: [
      '@pinia/nuxt',
      "@nuxtjs/tailwindcss",
  ],

  devtools: {
      enabled: true,
  },

  pinia: {
      storesDirs: ['./stores/**'],
  },

  runtimeConfig: {
      public: {
          backendUrl: `${process.env.BASE_PROTOCOL ?? 'http://'}${process.env.BACKEND_DOMAIN ?? 'localhost:8000'}`,
          frontendUrl: `${process.env.BASE_PROTOCOL ?? 'http://'}${process.env.FRONTEND_DOMAIN ?? 'localhost:3000'}`,
          websiteUrl: `${process.env.BASE_PROTOCOL ?? 'http://'}${process.env.WEBSITE_DOMAIN ?? 'localhost:3001'}`,
          screensUrl: `${process.env.BASE_PROTOCOL ?? 'http://'}${process.env.SCREENS_DOMAIN ?? 'localhost:3002'}`,
          posthogPublicKey: 'phc_IUjuGhQ1tgOqVVLtbrbnpy4yEYgS8CJJtNZUTIDYBUO',
          posthogHost: 'https://eu.i.posthog.com',
      },
  },

  compatibilityDate: '2024-12-12',
})