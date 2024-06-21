export default function (date: string|number|Date): string|undefined|null
{
    if (date === undefined) return undefined
    if (date === null) return null

    const dayjs = useDayjs()
    return dayjs(date).utc().format()
}