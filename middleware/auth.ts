export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    
    if (!auth.user) {
        return auth.navigateToLogin(to.fullPath)
    }
})
