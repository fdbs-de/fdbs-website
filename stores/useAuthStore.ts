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
    company_name: string
    company_legalname: string
    company_slogan: string
    company_logo: string
    company_favicon: string
    default_currency?: string
    default_unit_length?: string
    default_unit_weight?: string
    default_unit_volume?: string
    default_unit_temperature?: string
    default_unit_speed?: string
    policy_allow_registration?: boolean
    policy_allow_password_reset?: boolean
    policy_allow_password_change?: boolean
    policy_allow_email_change?: boolean
    policy_allow_username_change?: boolean
    policy_allow_profile_image_upload?: boolean
    policy_allow_profile_banner_upload?: boolean
    policy_require_tfa?: boolean
    legal_notice?: string
    legal_privacy?: string
}



export const useAuthStore = defineStore('auth', () => {

    const options = ref({
        routes: {
            authHome: '/intern',
            guestHome: '/',
        },
        apiRoutes: {
            csrf: '/sanctum/csrf-cookie',
            user: '/api/user',
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

    async function fetchUser() {
        try
        {
            const {data} = await useAxios().get(apiRoutes.value.user)

            user.value = data.data
        }
        catch (error)
        {}
    }

    async function fetchSession() {
        try
        {
            const {data} = await useAxios().get(apiRoutes.value.session)
        
            user.value = data.user
            session.value = data.session
        }
        catch (error)
        {}
    }

    async function fetchDomain() {
        try
        {
            const {data} = await useAxios().get(apiRoutes.value.domain)
            
            domain.value = data
        }
        catch (error)
        {}
    }


    async function load()
    {
        await Promise.all([
            fetchCsrf(),
            fetchSession(),
            fetchDomain(),
        ])
    }



    async function logout()
    {
        try
        {
            await useAxios().post(apiRoutes.value.logout)
        }
        catch (error)
        {}

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
        fetchUser,
        fetchSession,
        fetchDomain,
        logout,
        load,

        hasRole,
        hasAnyRole,
        hasPerm,
        hasAnyPerm,
        isSuperAdmin,
    }
})