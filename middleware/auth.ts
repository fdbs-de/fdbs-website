export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    
    if (!auth.session.authenticated)
    {
        return auth.navigateToLogin(to.fullPath)
    }
})
