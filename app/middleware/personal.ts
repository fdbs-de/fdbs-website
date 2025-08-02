export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    
    if (!auth.hasRole('Personal') && !auth.isAdmin()) {
        return abortNavigation('Zugriff verweigert')
    }
})
