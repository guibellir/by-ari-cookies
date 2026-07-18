/**
 * Blog By Ari — artigos para SEO local (Aracaju / Sergipe).
 *
 * Como publicar semanalmente:
 * 1. Copie o modelo de um post abaixo
 * 2. Defina slug único (URL: /blog/seu-slug)
 * 3. Preencha title, description, date (YYYY-MM-DD) e seções
 * 4. Commit + push — o sitemap inclui posts automaticamente no build
 *
 * Dicas de SEO:
 * - Foque 1 palavra-chave principal por artigo
 * - Use cidade (Aracaju) e estado (Sergipe) de forma natural
 * - Link interno para /#sabores, /#pedido e outros posts
 * - title ~50–60 caracteres; description ~140–160
 */

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'cta'; text: string; href: string; label: string }

export type BlogPost = {
  slug: string
  title: string
  /** Meta description (SEO) */
  description: string
  /** Data de publicação ISO YYYY-MM-DD */
  date: string
  /** Atualização opcional */
  updated?: string
  /** Palavra-chave principal (guia editorial) */
  primaryKeyword: string
  /** Tags exibidas no card */
  tags: string[]
  /** Resumo curto na listagem */
  excerpt: string
  /** Imagem opcional (path em /public) */
  image?: string
  imageAlt?: string
  body: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cookie-artesanal-em-aracaju',
    title: 'Cookie artesanal em Aracaju: onde pedir e o que esperar',
    description:
      'Descubra onde pedir cookie artesanal em Aracaju. By Ari: Red Velvet, Double Chocolate e Tradicional, fresquinhos sob demanda via WhatsApp ou iFood.',
    date: '2026-07-18',
    primaryKeyword: 'cookie artesanal em Aracaju',
    tags: ['Aracaju', 'Cookie artesanal', 'Guia'],
    excerpt:
      'Se você busca cookie artesanal em Aracaju, saiba o que diferencia o feito à mão do industrializado e como pedir na By Ari.',
    image: '/images/cookie-red-velvet-aracaju-mobile.jpg',
    imageAlt:
      'Cookie red velvet artesanal By Ari em prato branco — Aracaju, Sergipe',
    body: [
      {
        type: 'p',
        text: 'Procurar cookie artesanal em Aracaju virou hábito de quem gosta de sobremesa com cara de casa: massa no ponto, cheiro de manteiga e chocolate derretendo. A By Ari nasceu em Aracaju, Sergipe, justamente para atender esse pedido — cookies gourmet feitos em lotes pequenos, sob demanda.',
      },
      {
        type: 'h2',
        text: 'O que é um cookie artesanal de verdade?',
      },
      {
        type: 'p',
        text: 'Cookie artesanal não é só “bonito no Instagram”. É receita própria, ingredientes selecionados (manteiga, cacau, baunilha, chocolates de qualidade) e produção cuidadosa. O resultado costuma ser borda levemente crocante, miolo macio e sabor que industrializado raramente entrega.',
      },
      {
        type: 'ul',
        items: [
          'Produção em lotes pequenos, pensada no frescor',
          'Sabores com identidade (não só “gotas genéricas”)',
          'Visual caprichado para presente, lanche e eventos',
          'Atendimento local: Aracaju e região via WhatsApp ou iFood',
        ],
      },
      {
        type: 'h2',
        text: 'Sabores de cookie artesanal na By Ari',
      },
      {
        type: 'p',
        text: 'Hoje o cardápio da By Ari em Aracaju tem três pilares: Red Velvet (massa amanteigada de baunilha e cacau com chocolate branco), Double Chocolate (cacau intenso com meio amargo) e Tradicional (manteiga, baunilha e gotas de chocolate). O cardápio pode crescer, mas a base continua artesanal.',
      },
      {
        type: 'h2',
        text: 'Como pedir cookie artesanal em Aracaju',
      },
      {
        type: 'p',
        text: 'Você pode pedir pelo WhatsApp — ideal para encomendas, presentes e combinar retirada ou entrega — ou pelo iFood, na loja By Ari — Cookies, para delivery em Aracaju-SE conforme a cobertura da plataforma.',
      },
      {
        type: 'cta',
        text: 'Quer provar agora? Fale com a By Ari e escolha seus sabores.',
        href: '/#pedido',
        label: 'Pedir cookies em Aracaju',
      },
    ],
  },
  {
    slug: 'cookie-em-sergipe-guia-by-ari',
    title: 'Cookie em Sergipe: guia para quem busca sabor artesanal',
    description:
      'Cookie em Sergipe com cara de artesanal: como a By Ari atende Aracaju com cookies gourmet, dicas de pedido e sabores para presentear ou se mimar.',
    date: '2026-07-18',
    primaryKeyword: 'cookie em Sergipe',
    tags: ['Sergipe', 'Aracaju', 'Cookie gourmet'],
    excerpt:
      'De Aracaju para quem pesquisa cookie em Sergipe: um guia prático de sabores, pedidos e o que torna o cookie By Ari diferente.',
    image: '/images/cookie-double-chocolate-aracaju-mobile.jpg',
    imageAlt:
      'Cookie double chocolate artesanal By Ari — cookie em Sergipe, Aracaju',
    body: [
      {
        type: 'p',
        text: 'Quem digita “cookie em Sergipe” no Google costuma querer a mesma coisa: um cookie gostoso, bem feito e fácil de pedir sem sair de casa. A By Ari atende Aracaju com cookies artesanais pensados para o dia a dia sergipano — lanche da tarde, presente rápido ou aquela recompensa no meio da semana.',
      },
      {
        type: 'h2',
        text: 'Por que pedir cookie local em Sergipe?',
      },
      {
        type: 'p',
        text: 'Marcas locais entendem o ritmo da cidade, combinam entrega e falam a língua de quem mora aqui. Ao escolher cookie em Sergipe feito em Aracaju, você apoia produção artesanal e recebe algo pensado para chegar fresco, não de prateleira genérica.',
      },
      {
        type: 'h2',
        text: 'Sabores que funcionam o ano todo',
      },
      {
        type: 'p',
        text: 'O Tradicional agrada quase todo mundo. O Double Chocolate é a escolha de quem não abre mão de cacau. O Red Velvet vira queridinho em presentes e fotos. Os três compõem o cardápio atual da By Ari e cobrem de “clássico seguro” a “quero algo especial”.',
      },
      {
        type: 'h2',
        text: 'Encomenda, presente e delivery',
      },
      {
        type: 'ul',
        items: [
          'WhatsApp: monte o pedido e alinhe data, quantidade e retirada/entrega',
          'iFood: delivery em Aracaju conforme a área de cobertura',
          'Presentes e eventos: avise com antecedência para garantir o forno',
        ],
      },
      {
        type: 'p',
        text: 'Se você está em Aracaju e busca cookie em Sergipe com qualidade gourmet, a By Ari é o caminho curto entre o desejo e o primeiro pedaço ainda quentinho na memória.',
      },
      {
        type: 'cta',
        text: 'Veja o cardápio completo e peça pelo canal que preferir.',
        href: '/#sabores',
        label: 'Ver sabores By Ari',
      },
    ],
  },
  {
    slug: 'melhor-cookie-em-aracaju-como-escolher',
    title: 'Melhor cookie em Aracaju: como escolher o sabor ideal',
    description:
      'Como escolher o melhor cookie em Aracaju para você: Red Velvet, Double Chocolate ou Tradicional. Dicas da By Ari para pedido, presente e delivery.',
    date: '2026-07-18',
    primaryKeyword: 'melhor cookie em Aracaju',
    tags: ['Aracaju', 'Sabores', 'Dicas'],
    excerpt:
      'Não existe um único “melhor cookie em Aracaju” — existe o melhor para o seu momento. Veja como escolher entre os sabores By Ari.',
    image: '/images/cookie-tradicional-aracaju-mobile.jpg',
    imageAlt:
      'Cookie tradicional artesanal By Ari com gotas de chocolate — Aracaju',
    body: [
      {
        type: 'p',
        text: 'A pergunta “qual o melhor cookie em Aracaju?” aparece o tempo todo — e a resposta honesta é: depende do que você gosta. Na By Ari, cada sabor tem personalidade. Abaixo, um guia rápido para acertar de primeira.',
      },
      {
        type: 'h2',
        text: 'Red Velvet: o queridinho visual e suave',
      },
      {
        type: 'p',
        text: 'Massa amanteigada de baunilha e cacau com gotas de chocolate branco. Ideal para presentear, surpreender e quem gosta de equilíbrio entre doçura e elegância. Se a ocasião pede “uau” na primeira olhada, é forte candidato a melhor cookie da vez.',
      },
      {
        type: 'h2',
        text: 'Double Chocolate: para fãs de cacau',
      },
      {
        type: 'p',
        text: 'Massa de cacau com gotas de chocolate meio amargo. Mais intenso, menos “baunilha no centro do palco”. Se chocolate de verdade é inegociável, este costuma ser o melhor cookie em Aracaju na sua lista pessoal.',
      },
      {
        type: 'h2',
        text: 'Tradicional: o clássico que não falha',
      },
      {
        type: 'p',
        text: 'Manteiga, baunilha e gotas de chocolate — a base que conquistou gerações, no ponto By Ari. Perfeito para pedidos em grupo, primeira compra ou quando você quer um cookie artesanal em Aracaju sem ousar demais no sabor.',
      },
      {
        type: 'h2',
        text: 'Dica de pedido',
      },
      {
        type: 'ul',
        items: [
          'Primeira vez: monte um mix dos três sabores',
          'Presente: Red Velvet + embalagem caprichada (combine no WhatsApp)',
          'Chocolate lovers: foque no Double Chocolate',
          'Delivery rápido: confira a By Ari no iFood em Aracaju',
        ],
      },
      {
        type: 'cta',
        text: 'Pronto para escolher? Peça agora e prove o seu favorito.',
        href: '/#pedido',
        label: 'Pedir na By Ari',
      },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function formatPostDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
