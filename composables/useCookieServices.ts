import posthog from 'posthog-js'

type CookieService = {
    name: string
    description: string
    legalNotice?: string
    privacyPolicy?: string
    type: 'Funktional'|'Analyse'|'Marketing'
    setConsent: (consent: 'yes' | 'no') => void
}

export function useCookieServices() {
    return ref<CookieService[]>([
        {
            name: 'PostHog',
            description: 'PostHog ermöglicht uns zu sehen, welche Seiten und Funktionen Sie besuchen. Diese Informationen helfen uns, unsere Webseite zu verbessern und Ihnen eine bessere Erfahrung zu bieten.',
            privacyPolicy: 'https://posthog.com/privacy',
            type: 'Analyse',
            setConsent(consent: 'yes' | 'no') {
                localStorage.setItem('cc_posthog', consent)
                posthog.set_config({ persistence: consent === 'yes' ? 'cookie' : 'memory' })
            },
        },
    ])
}