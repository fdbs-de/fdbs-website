import { transliterate as tr, slugify } from 'transliteration'

export default function (str: string = '', options: any = {}): string
{
    return slugify(str, options)
}