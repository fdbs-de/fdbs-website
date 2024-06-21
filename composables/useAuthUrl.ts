export const useAuthUrl = (apiPath: 'login'|'register'|'verify-2fa', returnTo: string = '') => {
    const runtimeConfig = useRuntimeConfig()
    
    returnTo = encodeURI(`${runtimeConfig.public.frontendUrl}${returnTo}`)

    return `${runtimeConfig.public.authFrontendUrl}/${apiPath}?redirect=${returnTo}`
}
