import axios from 'axios'

type Options = {
    headers?: any
    [key: string]: any
}



export function useAxios(options: Options = {})
{
    // Runtime variables
    const runtimeConfig = useRuntimeConfig()

    let headers: any = {
        accept: 'application/json',
    }

    // Get XSRF-TOKEN cookie
    const token = useCookie('XSRF-TOKEN')

    // Add XSRF-TOKEN header if it exists
    if (token.value) headers['X-XSRF-TOKEN'] = token.value as string

    // Add cookie header if on server
    if (import.meta.server)
    {
        headers = {
            ...headers,
            ...useRequestHeaders(['cookie']),
            referer: runtimeConfig.public.websiteUrl as string,
        }
    }

    // Create axios instance
    return axios.create({
        baseURL: runtimeConfig.public.backendUrl as string,
        withCredentials: true,
        headers: {
            ...headers,
            ...options.headers,
        },
        ...options,
    })
}