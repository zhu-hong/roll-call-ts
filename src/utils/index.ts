import { convertToPinyin } from 'tiny-pinyin'

export const getShortName = (name: string) => {
  return convertToPinyin(name, '-').split('-').map((p) => p[0]).join('')
}