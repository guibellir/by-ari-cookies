# By Ari Cookies

Site institucional da **By Ari Cookies** — cookies artesanais e gourmet em **Aracaju, Sergipe**.

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

- `whatsapp` — número com DDI (ex.: `5579999999999`)
- `instagram` — usuário sem `@`
- `email`

## Deploy

Pode publicar em **Vercel**, **Netlify** ou **GitHub Pages** a partir deste repositório.

## Sabores atuais

1. Red Velvet  
2. Double Chocolate  
3. Tradicional  
