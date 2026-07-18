# By Ari

Site institucional da **By Ari** — cookies artesanais e gourmet em **Aracaju, Sergipe**.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- CSS próprio (sem framework pesado)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar (geralmente `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Como adicionar um novo sabor

Edite o arquivo `src/data/flavors.ts` e inclua um objeto no array `flavors`:

```ts
{
  id: 'pistache',
  name: 'Pistache',
  shortDescription: 'Crocante, delicado e sofisticado.',
  description: 'Massa amanteigada com pistache e um toque de sal.',
  tags: ['Novo', 'Gourmet'],
  accent: '#5B7A4E',
  gradient: 'linear-gradient(145deg, #2d3f26 0%, #5B7A4E 50%, #8fad7a 100%)',
  emoji: '🥜',
  badge: 'Em breve', // opcional
  available: true,   // false = aparece como "em breve"
}
```

## Dados de contato

No mesmo arquivo `src/data/flavors.ts`, atualize o objeto `brand`:

- `whatsapp` — número com DDI (ex.: `5533998561413`)
- `whatsappDisplay` — como aparece no site
- `instagram` — usuário sem `@`

## Deploy

Pode publicar em **Vercel**, **Netlify** ou **GitHub Pages** a partir deste repositório.

### SEO após o deploy

1. Atualize `brand.siteUrl` em `src/data/flavors.ts` com o domínio real.
2. Atualize as URLs em `index.html` (canonical, Open Graph), `public/robots.txt` e `public/sitemap.xml`.
3. Cadastre o site no [Google Search Console](https://search.google.com/search-console) e envie o sitemap.
4. Crie/otimize o **Google Meu Negócio** da By Ari em Aracaju (forte para SEO local).

## Sabores atuais

1. Red Velvet  
2. Double Chocolate  
3. Tradicional  
