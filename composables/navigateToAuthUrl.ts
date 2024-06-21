export const navigateToAuthUrl = (apiPath: 'login'|'register'|'verify-2fa', returnTo: string = '') => {
    navigateTo(useAuthUrl(apiPath, returnTo), { replace: true, external: true })
}
