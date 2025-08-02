import _ from 'lodash'

export default function (parameters: Partial<object>): string
{
    // Flatten parameters
    parameters = flattenObject(parameters)

    // Convert all values to strings
    parameters = _.mapValues(parameters, v => v ?? '')

    // Remove all null and undefined values
    parameters = _.omitBy(parameters, _.isNil)
    
    // Return the parameters as a query string
    return new URLSearchParams(parameters as string[][]).toString()
}