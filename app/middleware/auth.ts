export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    
    if (!auth.isAuthenticated()) {
        return auth.navigateToLogin(to.fullPath)
    }

    if (auth.isRestricted() && to.path !== '/intern/profil') {
        return navigateTo('/intern/profil')
    }
})
