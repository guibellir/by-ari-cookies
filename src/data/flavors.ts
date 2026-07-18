/**
 * Catálogo de sabores — adicione novos itens aqui para exibir no site.
 * Campos opcionais: badge, available (false = "em breve")
 */
export type Flavor = {
  id: string
  name: string
  shortDescription: string
  description: string
  tags: string[]
  /** Cor de acento do card (hex) */
  accent: string
  /** Gradiente de fundo do card */
  gradient: string
  /** Emoji ou símbolo decorativo */
  emoji: string
  /** Ex.: "Mais pedido", "Novo" */
  badge?: string
  available?: boolean
}

export const flavors: Flavor[] = [
  {
    id: 'red-velvet',
    name: 'Red Velvet',
    shortDescription: 'Vermelho aveludado com toque de cacau e cream cheese.',
    description:
      'Massa vermelha intensa, levemente aveludada, com notas de cacau e o contraste perfeito do cream cheese. Elegante e viciante.',
    tags: ['Clássico gourmet', 'Cream cheese'],
    accent: '#8B2942',
    gradient: 'linear-gradient(145deg, #5c1a2e 0%, #8B2942 45%, #c45c6a 100%)',
    emoji: '❤️',
    badge: 'Queridinho',
    available: true,
  },
  {
    id: 'double-chocolate',
    name: 'Double Chocolate',
    shortDescription: 'Chocolate em dose dupla para os verdadeiros chocólatras.',
    description:
      'Massa de chocolate profundo recheada e pontilhada com gotas generosas. Intenso, macio por dentro e com borda levemente crocante.',
    tags: ['Intenso', 'Cacau'],
    accent: '#3D2314',
    gradient: 'linear-gradient(145deg, #1a100a 0%, #3D2314 40%, #6B4423 100%)',
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
    emoji: '🍪',
    available: true,
  },
  // Exemplo de como adicionar um sabor futuro (descomente e edite):
  // {
  //   id: 'pistache',
  //   name: 'Pistache',
  //   shortDescription: 'Crocante, delicado e sofisticado.',
  //   description: 'Massa amanteigada com pistache e um toque de sal.',
  //   tags: ['Novo', 'Gourmet'],
  //   accent: '#5B7A4E',
  //   gradient: 'linear-gradient(145deg, #2d3f26 0%, #5B7A4E 50%, #8fad7a 100%)',
  //   emoji: '🥜',
  //   badge: 'Em breve',
  //   available: false,
  // },
]

export const brand = {
  name: 'By Ari Cookies',
  tagline: 'Cookies artesanais & gourmet',
  city: 'Aracaju',
  state: 'Sergipe',
  // Atualize com o número real (somente dígitos, com DDI 55)
  whatsapp: '5579999999999',
  // Atualize com o Instagram real (sem @)
  instagram: 'byaricookies',
  email: 'ola@byaricookies.com.br',
}
