import type { Role } from '~/types/role'

type User = {
    id: number

    profile_image: string
    profile_banner: string | null
    email: string | null
    username: string | null
    ident_number: string | null

    has_tfa_enabled: boolean
    has_tfa_totp_method_enabled: boolean
    has_tfa_sms_method_enabled: boolean
    has_tfa_email_method_enabled: boolean
    default_tfa_method: string | null

    salutation: string | null
    fullname: string | null
    name: string | null
    prefix: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    suffix: string | null
    nickname: string | null
    legalname: string | null

    company: string | null
    department: string | null
    title: string | null

    email_verified_at: string | null
    enabled_at: string | null
    deleted_at: string | null
    created_at: string | null
    updated_at: string | null

    settings: {
        language?: string
        timezone?: string
        theme?: string
    }

    roles: Role[]
    permissions: string[]
}

type SessionInfo = {
    authenticated: boolean
    tfa_enabled: boolean
    tfa_verified: boolean
}

type DomainInfo = {
    [key: string]: any
}



export const useAuthStore = defineStore('auth', () => {
    
    const runtimeConfig = useRuntimeConfig()
    const options = ref({
        routes: {
            authHome: '/intern',
            guestHome: '/',
        },
        apiRoutes: {
            csrf: '/sanctum/csrf-cookie',
            session: '/api/session',
            domain: '/api/domain/settings',
            logout: '/logout',
        },
        superAdminPermissions: ['system.super-admin'],
    })

    const routes = computed(() => options.value.routes)
    const apiRoutes = computed(() => options.value.apiRoutes)


    const user = ref<User|null>(null)
    const domain = ref<DomainInfo|null>(null)
    const session = ref<SessionInfo>({
        authenticated: false,
        tfa_enabled: false,
        tfa_verified: false,
    })

    function isSuperAdmin(): boolean
    {
        if (!user.value) return false

        return user.value.permissions.some(p => options.value.superAdminPermissions.includes(p))
    }

    function hasAnyRole(roles: string[]): boolean
    {
        if (!user.value) return false

        return user.value.roles.map(r => r.name as string).some(r => roles.includes(r))
    }

    function hasAnyPerm(perms: string[]): boolean
    {
        if (!user.value) return false
        
        if (isSuperAdmin()) return true
        
        return user.value.permissions.some(p => perms.includes(p))
    }
    
    function hasRole(role: string) { return hasAnyRole([role]) }
    function hasPerm(perm: string) { return hasAnyPerm([perm]) }



    async function fetchCsrf() {
        try
        {
            await useAxios().get(apiRoutes.value.csrf)
        }
        catch (error)
        {}
    }

    async function fetchSession() {
        try {
            const {data} = await useAxios().get(apiRoutes.value.session)
        
            user.value = data.user
            session.value = data.session
        }
        catch (error) {}
    }

    async function fetchDomain() {
        try {
            const {data} = await useAxios().get(apiRoutes.value.domain)
            
            domain.value = data
        }
        catch (error)
        {}
    }


    async function load() {
        await Promise.all([
            fetchCsrf(),
            fetchSession(),
            fetchDomain(),
        ])
    }



    function navigateToAuth(endpoint: 'login' | 'register', returnTo: string = '') {
        returnTo = encodeURI(`${runtimeConfig.public.websiteUrl}${returnTo}`)
        navigateTo(`${runtimeConfig.public.frontendUrl}/auth/${endpoint}?intended=${returnTo}`, { replace: true, external: true })
    }

    function navigateToLogin(returnTo: string = '') {
        navigateToAuth('login', returnTo)
    }

    function navigateToRegister(returnTo: string = '') {
        navigateToAuth('register', returnTo)
    }

    function navigateToProfile(returnTo: string = '') {
        returnTo = encodeURI(`${runtimeConfig.public.websiteUrl}${returnTo}`)
        navigateTo(`${runtimeConfig.public.frontendUrl}/auth/profile?return=${returnTo}`, { replace: true, external: true })
    }

    async function logout() {
        try {
            await useAxios().post(apiRoutes.value.logout)
        }
        catch (error) {}

        user.value = null
        session.value.authenticated = false
        session.value.tfa_enabled = false
        session.value.tfa_verified = false

        navigateTo(routes.value.guestHome)
    }



    return {
        user: user as unknown as User | null,
        domain: domain as unknown as DomainInfo | null,
        session: session as unknown as SessionInfo,
        routes: routes as unknown as Record<string, string>,
        apiRoutes: apiRoutes as unknown as Record<string, string>,

        fetchCsrf,
        fetchSession,
        fetchDomain,
        logout,
        load,

        navigateToLogin,
        navigateToRegister,
        navigateToProfile,

        hasRole,
        hasAnyRole,
        hasPerm,
        hasAnyPerm,
        isSuperAdmin,
    }
})