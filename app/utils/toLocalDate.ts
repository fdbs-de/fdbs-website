export default function (date: string|number|Date, format = 'YYYY-MM-DDTHH:mm'): string|undefined|null
{
    if (date === undefined) return undefined
    if (date === null) return null

    const dayjs = useDayjs()
    return dayjs(date).format(format)
}