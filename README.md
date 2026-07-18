# By Ari

Site institucional da **By Ari** — cookies artesanais e gourmet em **Aracaju, Sergipe**.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- CSS próprio (sem framework pesado)
- Deploy otimizado para **[Vercel](https://vercel.com)**

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar (geralmente `http://localhost:5173`).

Requisito: **Node.js 20.19+** (veja `.nvmrc`).

## Build

```bash
npm run build
npm run preview
```

A pasta `dist/` é o output estático servido na Vercel.

## Deploy na Vercel

### Opção rápida (recomendado)

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe o repositório `guibellir/by-ari-cookies`
3. A Vercel detecta **Vite** automaticamente (`vercel.json` já define build e output)
4. Deploy — sem configuração extra

A URL do site (canonical, Open Graph, sitemap, schema) é resolvida automaticamente no build:

1. `VITE_SITE_URL` (se definida)
2. Domínio de produção da Vercel (`VERCEL_PROJECT_PRODUCTION_URL`)
3. URL do deploy (`VERCEL_URL`)
4. Fallback / produção: `https://byari.shop`

### Domínio: byari.shop

O projeto já está configurado para **https://byari.shop** (`.env.production` + fallbacks).

Na Vercel:

1. **Settings → Domains** → adicione `byari.shop` (e `www.byari.shop` se quiser)
2. Configure o DNS no registrador conforme a Vercel indicar
3. (Recomendado) **Environment Variables → Production:**
   ```
   VITE_SITE_URL=https://byari.shop
   ```
4. Redeploy após apontar o domínio

### CLI

```bash
npx vercel
npx vercel --prod
```

## Como adicionar um novo sabor

Edite o arquivo `src/data/flavors.ts` e inclua um objeto no array `flavors`.

## Dados de contato

No mesmo arquivo `src/data/flavors.ts`, atualize o objeto `brand`:

- `whatsapp` — número com DDI (ex.: `5533998296730`)
- `whatsappDisplay` — como aparece no site
- `instagram` — usuário sem `@`
- `ifood` — link da loja

## SEO após o deploy

1. Cadastre o site no [Google Search Console](https://search.google.com/search-console) e envie `https://SEU-DOMINIO/sitemap.xml`
2. Crie/otimize o **Google Meu Negócio** da By Ari em Aracaju

## Sabores atuais

1. Red Velvet  
2. Double Chocolate  
3. Tradicional  
