export default defineNuxtConfig({
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
        },
    },
})