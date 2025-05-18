import type { Role } from '~/types/role'

type User = {
    id: number

    avatar: string
    banner: string | null
    email: string | null
    phone: string | null
    username: string | null

    has_tfa_enabled: boolean
    has_tfa_totp_method_enabled: boolean
    has_tfa_sms_method_enabled: boolean
    has_tfa_email_method_enabled: boolean
    default_tfa_method: string | null

    name: string | null
    salutation: string | null
    fullname: string | null
    prefix: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    suffix: string | null
    nickname: string | null
    legalname: string | null

    organisation: string | null
    department: string | null
    job_title: string | null

    email_verified_at: string | null
    enabled_at: string | null
    deleted_at: string | null
    created_at: string | null
    updated_at: string | null
    blocked_at: string | null
    block_reason: string | null

    settings: {
        [key: string]: any
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
            auth: '/intern',
            guest: '/',
        },
        apiRoutes: {
            csrf: '/api/csrf-cookie',
            session: '/api/session',
            domain: '/api/domain/settings',
            logout: '/logout',
        },
        adminPermissions: ['system.admin', 'system.super-admin'],
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



    async function fetchCsrf() {
        try {
            await useAxios().get(apiRoutes.value.csrf)
        }
        catch (error) {}
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
        catch (error) {}
    }

    async function load() {
        await Promise.all([
            fetchCsrf(),
            fetchSession(),
            fetchDomain(),
        ])
    }



    /**
     * Check if the user is authenticated
     * @description This function checks if the user is authenticated and has passed 2FA
     * 
     * @returns {Boolean}
     * @memberof AuthStore
     */
    function isAuthenticated(): Boolean {
        // Base check
        if (!user.value) return false
        if (!session.value) return false

        // Authenticated check
        if (!session.value.authenticated) return false

        // 2FA check
        if (session.value.tfa_enabled && !session.value.tfa_verified) return false

        return true
    }

    /**
     * Check if the user is in some way restricted
     * @description This function checks if the user has either not verified their email or is not enabled
     * 
     * @returns {Boolean}
     * @memberof AuthStore
     */
    function isRestricted(): Boolean {
        if ((user.value?.email_verified_at || null) === null) return true
        if ((user.value?.enabled_at || null) === null) return true

        return false
    }

    /**
     * Check if the user is blocked
     * @description This function checks if the user has been blocked
     * 
     * @returns {Boolean}
     * @memberof AuthStore
     */
    function isBlocked(): Boolean {
        if ((user.value?.blocked_at || null) === null) return false
        
        return true
    }



    function adminPanelUrl() {
        return `${runtimeConfig.public.frontendUrl}`
    }

    function navigateToAuth(endpoint: 'login' | 'register', returnTo: string = '') {
        returnTo = encodeURI(`${runtimeConfig.public.websiteUrl}${returnTo}`)
        navigateTo(`${runtimeConfig.public.frontendUrl}${runtimeConfig.public.frontendPrefix}auth/${endpoint}?intended=${returnTo}`, { replace: true, external: true })
    }

    function navigateToLogin(returnTo: string = '') {
        navigateToAuth('login', returnTo)
    }

    function navigateToRegister(returnTo: string = '') {
        navigateToAuth('register', returnTo)
    }

    function navigateToProfile(returnTo: string = '') {
        returnTo = encodeURI(`${runtimeConfig.public.websiteUrl}${returnTo}`)
        navigateTo(`${runtimeConfig.public.frontendUrl}${runtimeConfig.public.frontendPrefix}auth/profile?return=${returnTo}`, { replace: true, external: true })
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

        navigateTo(routes.value.guest)
    }



    function isAdmin() {
        if (!user.value) return false

        return options.value.adminPermissions.some((permission) => user.value?.permissions.includes(permission))
    }

    function isSuperAdmin() {
        if (!user.value) return false

        return options.value.superAdminPermissions.some((permission) => user.value?.permissions.includes(permission))
    }

    function hasAdminPanelAccess() {
        return can('system.access.admin.panel')
    }

    function can(permissions: string|string[]) {
        if (!user.value) return false

        // Convert string to array
        if (!Array.isArray(permissions)) permissions = [permissions]

        // Check for super user
        if (isAdmin()) return true

        return permissions.every((permission) => user.value?.permissions.includes(permission))
    }

    function canAny(permissions: string|string[]) {
        if (!user.value) return false

        if (!Array.isArray(permissions)) permissions = [permissions]

        if (isAdmin()) return true

        return permissions.some((permission) => user.value?.permissions.includes(permission))
    }

    function hasRole(role: string|string[]) {
        if (!user.value) return false

        if (!Array.isArray(role)) role = [role]

        return role.every(role => user.value?.roles?.map(r => r?.name ?? '').includes(role))
    }

    function hasAnyRole(roles: string|string[]): boolean {
        if (!user.value) return false

        if (!Array.isArray(roles)) roles = [roles]

        return roles.some(role => user.value?.roles?.map(r => r?.name ?? '').includes(role))
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
        load,

        isAuthenticated,
        isRestricted,
        isBlocked,
        
        adminPanelUrl,
        navigateToLogin,
        navigateToRegister,
        navigateToProfile,
        logout,

        isAdmin,
        isSuperAdmin,
        hasAdminPanelAccess,
        can,
        canAny,
        hasRole,
        hasAnyRole,
    }
})