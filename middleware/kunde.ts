export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    
    if (!auth.hasRole('Kunde') && !auth.isAdmin()) {
        return abortNavigation('Zugriff verweigert')
    }
})
