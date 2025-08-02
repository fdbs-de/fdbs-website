import { defineNuxtPlugin } from '#app'
import posthog from 'posthog-js'

export default defineNuxtPlugin(nuxtApp => {
    const runtimeConfig = useRuntimeConfig()
    const router = useRouter()

    const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
        api_host: runtimeConfig.public.posthogHost,
        person_profiles: 'identified_only',
        capture_pageview: false, // We manually capture pageviews further down
        persistence: 'memory', // Only store data in memory until user accepts cookies
        loaded(posthog) {
            if (import.meta.env.MODE === 'development') posthog.debug()
        }
    })
    
    router.afterEach((to) => {
        nextTick(() => {
            posthog.capture('$pageview', {
                current_url: to.fullPath
            })
        })
    })

    return {
        provide: {
            posthog: () => posthogClient
        }
    }
})