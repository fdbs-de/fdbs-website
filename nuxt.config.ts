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
            backendUrl: process.env.BACKEND_URL,
            frontendUrl: process.env.FRONTEND_URL,
            authFrontendUrl: process.env.AUTH_FRONTEND_URL,
        },
    },
})