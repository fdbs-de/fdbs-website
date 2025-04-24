export default defineNuxtConfig({
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
            backendUrl: `${process.env.BASE_PROTOCOL ?? 'http://'}${process.env.BACKEND_DOMAIN ?? 'localhost:8000'}`,
            frontendUrl: `${process.env.BASE_PROTOCOL ?? 'http://'}${process.env.FRONTEND_DOMAIN ?? 'localhost:3000'}`,
            websiteUrl: `${process.env.BASE_PROTOCOL ?? 'http://'}${process.env.WEBSITE_DOMAIN ?? 'localhost:3001'}`,
            screensUrl: `${process.env.BASE_PROTOCOL ?? 'http://'}${process.env.SCREENS_DOMAIN ?? 'localhost:3002'}`,
            posthogPublicKey: 'phc_IUjuGhQ1tgOqVVLtbrbnpy4yEYgS8CJJtNZUTIDYBUO',
            posthogHost: 'https://eu.i.posthog.com',
        },
    },

    compatibilityDate: '2024-12-12',

    devtools: {
        enabled: true,
    },
})