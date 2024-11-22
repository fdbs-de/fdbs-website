export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    
    if (!auth.hasAnyRole(['Kunde', 'Personal']) && !auth.isAdmin()) {
        return abortNavigation('Zugriff verweigert')
    }
})
