export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    
    if (!auth.session.authenticated)
    {
        return navigateToAuthUrl('verify-2fa', to.fullPath)
        return navigateToAuthUrl('login', to.fullPath)
    }

    if (auth.session.tfa_enabled && !auth.session.tfa_verified)
    {
    }
})
