import { brand } from '../data/flavors'

export function whatsappLink(message?: string) {
  const text =
    message ??
    `Olá! Vim pelo site da ${brand.name} e gostaria de saber mais sobre os cookies.`
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`
}
