export default function (route: string, parameters: Partial<object> = {}): string
{
    // Flatten parameters
    parameters = flattenObject(parameters)

    // Replace :param with the param from parameters
    for (let key in parameters)
    {
        // Skip if the route doesn't include the parameter
        if (!route.includes(`:${key}`)) continue

        // Replace the parameter
        route = route.replace(`:${key}`, parameters[key as keyof typeof parameters])

        // Remove the parameter from parameters
        delete parameters[key as keyof typeof parameters]
    }
    
    // Remove all remaining :param
    route = route.replace(/:[a-zA-Z0-9]+/g, '')

    // Return the route with the parameters as a query string
    return [route, toQueryParameters(parameters)].filter(Boolean).join('?')
}