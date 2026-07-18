/**
 * Catálogo de sabores — adicione novos itens aqui para exibir no site.
 * Campos opcionais: badge, available (false = "em breve"), image
 */
export type Flavor = {
  id: string
  name: string
  shortDescription: string
  description: string
  tags: string[]
  /** Cor de acento do card (hex) */
  accent: string
  /** Gradiente de fundo do card (fallback se não houver foto) */
  gradient: string
  /** Foto do cookie em /public/images */
  image?: string
  /** Texto alternativo da foto (SEO + acessibilidade) */
  imageAlt?: string
  /** Emoji ou símbolo decorativo (fallback) */
  emoji: string
  /** Ex.: "Mais pedido", "Novo" */
  badge?: string
  available?: boolean
}

export const flavors: Flavor[] = [
  {
    id: 'red-velvet',
    name: 'Red Velvet',
    shortDescription:
      'Massa amanteigada de baunilha e cacau, com gotas de chocolate branco.',
    description:
      'Massa amanteigada de baunilha e cacau, com gotas de chocolate branco derretendo a cada mordida. Suave, elegante e irresistível.',
    tags: ['Baunilha & cacau', 'Chocolate branco'],
    accent: '#8B2942',
    gradient: 'linear-gradient(145deg, #5c1a2e 0%, #8B2942 45%, #c45c6a 100%)',
    image: '/images/cookie-red-velvet-aracaju.jpg',
    imageAlt:
      'Cookie red velvet artesanal By Ari com chocolate branco — Aracaju, Sergipe',
    emoji: '❤️',
    badge: 'Queridinho',
    available: true,
  },
  {
    id: 'double-chocolate',
    name: 'Double Chocolate',
    shortDescription:
      'Massa de cacau recheada com gotas de chocolate meio amargo.',
    description:
      'Massa de cacau intensa, recheada com gotas de chocolate meio amargo. Para quem gosta de chocolate de verdade, em dose dupla.',
    tags: ['Intenso', 'Meio amargo'],
    accent: '#3D2314',
    gradient: 'linear-gradient(145deg, #1a100a 0%, #3D2314 40%, #6B4423 100%)',
    image: '/images/cookie-double-chocolate-aracaju.jpg',
    imageAlt:
      'Cookie double chocolate artesanal By Ari com chocolate meio amargo — Aracaju, SE',
    emoji: '🍫',
    badge: 'Mais pedido',
    available: true,
  },
  {
    id: 'tradicional',
    name: 'Tradicional',
    shortDescription: 'A base perfeita: manteiga, baunilha e gotas de chocolate.',
    description:
      'O cookie que conquistou gerações, feito do nosso jeito: manteiga de qualidade, baunilha e gotas de chocolate derretendo a cada mordida.',
    tags: ['Clássico', 'Baunilha'],
    accent: '#C4A35A',
    gradient: 'linear-gradient(145deg, #6B4423 0%, #A67C52 50%, #C4A35A 100%)',
    image: '/images/cookie-tradicional-aracaju.jpg',
    imageAlt:
      'Cookie tradicional artesanal By Ari com gotas de chocolate — Aracaju, Sergipe',
    emoji: '🍪',
    available: true,
  },
]

export const brand = {
  name: 'By Ari',
  tagline: 'Cookies artesanais & gourmet',
  city: 'Aracaju',
  state: 'Sergipe',
  stateCode: 'SE',
  country: 'BR',
  /** Atualize com o domínio real após o deploy (ex.: https://byari.com.br) */
  siteUrl: 'https://byari.com.br',
  /** Somente dígitos, com DDI 55 */
  whatsapp: '5533998296730',
  whatsappDisplay: '(33) 99829-6730',
  /** Instagram sem @ */
  instagram: 'byari.cookies',
  /** Link da loja no iFood */
  ifood:
    'https://www.ifood.com.br/delivery/aracaju-se/by-ari---cookies-aruana/28bc0471-3abb-488b-aaaf-0d679f8c1829?utm_medium=share',
}

/**
 * Depoimentos reais de clientes.
 * Adicione novos itens aqui; o site atualiza sozinho.
 */
export type Testimonial = {
  id: string
  quote: string
  /** Ex.: "Cliente em Aracaju" — sem nome se preferir privacidade */
  author: string
  /** 1–5, opcional */
  rating?: number
}

export const testimonials: Testimonial[] = [
  {
    id: 'viciada',
    quote: 'Tô viciada no seu cookie',
    author: 'Cliente · condomínio',
    rating: 5,
  },
  {
    id: 'booom',
    quote: 'JESUS QUE COOKIE BOOOOOOM',
    author: 'Cliente · Aracaju',
    rating: 5,
  },
  {
    id: 'delicia',
    quote: 'Bicha que delícia',
    author: 'Cliente · Aracaju',
    rating: 5,
  },
  {
    id: 'mais-gostoso',
    quote: 'Toda vez que eu peço tá mais gostoso. Meu Deus!',
    author: 'Cliente · Aracaju',
    rating: 5,
  },
]

export const faqItems = [
  {
    question: 'Como pedir cookies da By Ari em Aracaju?',
    answer:
      'Você pode pedir pelo WhatsApp ou pelo iFood. No WhatsApp, escolha os sabores e a quantidade; no iFood, a loja By Ari — Cookies está disponível para delivery em Aracaju-SE.',
  },
  {
    question: 'Quais sabores de cookie a By Ari tem?',
    answer:
      'No momento oferecemos três sabores artesanais: Red Velvet (massa amanteigada de baunilha e cacau com chocolate branco), Double Chocolate (massa de cacau com chocolate meio amargo) e Tradicional (manteiga, baunilha e gotas de chocolate). Novos sabores podem chegar em breve.',
  },
  {
    question: 'A By Ari entrega em Aracaju?',
    answer:
      'Sim. Atendemos Aracaju, Sergipe. Pelo iFood o delivery segue a cobertura da plataforma; pelo WhatsApp combinamos a melhor forma de entrega ou retirada.',
  },
  {
    question: 'Os cookies são artesanais e gourmet?',
    answer:
      'Sim. Cada cookie da By Ari é feito artesanalmente, em lotes pequenos, com ingredientes selecionados — manteiga, cacau, baunilha e chocolates de qualidade.',
  },
  {
    question: 'Posso encomendar cookies para presente ou eventos?',
    answer:
      'Pode sim. Fale conosco no WhatsApp e conte a data, a quantidade e os sabores. Ideal para presentes, reuniões, lanche da tarde e celebrações em Aracaju.',
  },
]
