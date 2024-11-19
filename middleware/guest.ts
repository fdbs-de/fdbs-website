export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    
    if (auth.user) {
        return navigateTo(auth.routes.auth)
    }
})
