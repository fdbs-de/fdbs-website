export const useAuthUrl = (apiPath: 'login'|'register'|'verify-2fa', returnTo: string = '') => {
    const runtimeConfig = useRuntimeConfig()
    
    returnTo = encodeURI(`${runtimeConfig.public.websiteUrl}${returnTo}`)

    return `${runtimeConfig.public.frontendUrl}/${apiPath}?redirect=${returnTo}`
}
