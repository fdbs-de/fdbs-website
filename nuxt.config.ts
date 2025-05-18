export default defineNuxtConfig({
    app: {
        baseURL: process.env.WEBSITE_PREFIX ?? '',
    },

    css: [
        '~/assets/css/app.sass',
    ],

    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
    ],

    pinia: {
        storesDirs: ['./stores/**'],
    },

    tailwindcss: {
        config: {
            theme: {
                extend: {
                    fontFamily: {
                        'heading': 'var(--font-heading)',
                        'text': 'var(--font-text)',
                        'mono': 'var(--font-mono)',
                        'icon': 'var(--font-icon)',
                        'brand': 'var(--font-brand)',
                    },
                    colors: {
                        'primary': 'var(--color-primary)',
                        'on-primary': 'var(--color-on-primary)',
                        'secondary': 'var(--color-secondary)',
                        'on-secondary': 'var(--color-on-secondary)',
                        'tertiary': 'var(--color-tertiary)',
                        'on-tertiary': 'var(--color-on-tertiary)',

                        'text': 'var(--color-text)',
                        'text-soft': 'var(--color-text-soft)',
                        'text-soft-disabled': 'var(--color-text-soft-disabled)',

                        'background': 'var(--color-background)',
                        'background-soft': 'var(--color-background-soft)',
                        'background-disabled': 'var(--color-background-soft-disabled)',

                        'border': 'var(--color-border)',
                        'border-focused': 'var(--color-border-focused)',
                        'border-disabled': 'var(--color-border-disabled)',

                        'info': 'var(--color-info)',
                        'on-info': 'var(--color-on-info)',
                        'success': 'var(--color-success)',
                        'on-success': 'var(--color-on-success)',
                        'warning': 'var(--color-warning)',
                        'on-warning': 'var(--color-on-warning)',
                        'error': 'var(--color-error)',
                        'on-error': 'var(--color-on-error)',
                    },
                },
            },
        },
    },

    runtimeConfig: {
        public: {
            backendUrl: process.env.BACKEND_URL ?? 'http://localhost:8000',
            backendPrefix: process.env.BACKEND_PREFIX ?? '/api',
            frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
            frontendPrefix: process.env.FRONTEND_PREFIX ?? '/helium',
            websiteUrl: process.env.WEBSITE_URL ?? 'http://localhost:3001',
            websitePrefix: process.env.WEBSITE_PREFIX ?? '',
            posthogPublicKey: 'phc_IUjuGhQ1tgOqVVLtbrbnpy4yEYgS8CJJtNZUTIDYBUO',
            posthogHost: 'https://eu.i.posthog.com',
        },
    },

    compatibilityDate: '2024-12-12',

    devtools: {
        enabled: true,
    },
})