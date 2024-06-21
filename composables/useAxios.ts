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
        referer: runtimeConfig.public.frontendUrl,
    }

    // Get XSRF-TOKEN cookie
    const token = useCookie('XSRF-TOKEN')

    // Add XSRF-TOKEN header if it exists
    if (token.value) headers['X-XSRF-TOKEN'] = token.value as string

    // Add cookie header if on server
    if (process.server)
    {
        headers = {
            ...headers,
            ...useRequestHeaders(['cookie']),
        }
    }

    // Create axios instance
    return axios.create({
        baseURL: runtimeConfig.public.backendUrl,
        withCredentials: true,
        headers: {
            ...headers,
            ...options.headers,
        },
        ...options,
    })
}