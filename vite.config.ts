import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Resolve a URL pública do site no deploy (Vercel) ou local.
 * Prioridade: VITE_SITE_URL → domínio de produção Vercel → URL do deploy → fallback.
 */
function resolveSiteUrl(env: Record<string, string>): string {
  const explicit = env.VITE_SITE_URL || process.env.VITE_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')

  const production =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_PROJECT_PRODUCTION_URL
  if (production) {
    const host = production.replace(/^https?:\/\//, '')
    return `https://${host}`
  }

  const vercelUrl = process.env.VERCEL_URL || env.VERCEL_URL
  if (vercelUrl) {
    const host = vercelUrl.replace(/^https?:\/\//, '')
    return `https://${host}`
  }

  return 'https://byari.shop'
}

/** Posts do blog (espelha slugs de src/data/blog.ts) — atualize ao publicar */
const BLOG_SLUGS = [
  { slug: 'cookie-artesanal-em-aracaju', date: '2026-07-18' },
  { slug: 'cookie-em-sergipe-guia-by-ari', date: '2026-07-18' },
  { slug: 'melhor-cookie-em-aracaju-como-escolher', date: '2026-07-18' },
]

function seoFilesPlugin(siteUrl: string): Plugin {
  return {
    name: 'by-ari-seo-files',
    closeBundle() {
      const outDir = resolve(__dirname, 'dist')

      writeFileSync(
        resolve(outDir, 'robots.txt'),
        [
          '# https://www.robotstxt.org/robotstxt.html',
          'User-agent: *',
          'Allow: /',
          '',
          `Sitemap: ${siteUrl}/sitemap.xml`,
          '',
        ].join('\n'),
        'utf8',
      )

      const today = new Date().toISOString().slice(0, 10)
      const urls = [
        {
          loc: `${siteUrl}/`,
          lastmod: today,
          changefreq: 'weekly',
          priority: '1.0',
        },
        {
          loc: `${siteUrl}/blog`,
          lastmod: today,
          changefreq: 'weekly',
          priority: '0.9',
        },
        ...BLOG_SLUGS.map((p) => ({
          loc: `${siteUrl}/blog/${p.slug}`,
          lastmod: p.date,
          changefreq: 'monthly',
          priority: '0.8',
        })),
      ]

      const urlXml = urls
        .map(
          (u) =>
            [
              '  <url>',
              `    <loc>${u.loc}</loc>`,
              `    <lastmod>${u.lastmod}</lastmod>`,
              `    <changefreq>${u.changefreq}</changefreq>`,
              `    <priority>${u.priority}</priority>`,
              '  </url>',
            ].join('\n'),
        )
        .join('\n')

      writeFileSync(
        resolve(outDir, 'sitemap.xml'),
        [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          urlXml,
          '</urlset>',
          '',
        ].join('\n'),
        'utf8',
      )
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = resolveSiteUrl(env)

  // Expõe para o client (import.meta.env.VITE_SITE_URL) e para %VITE_SITE_URL% no HTML
  process.env.VITE_SITE_URL = siteUrl

  return {
    plugins: [react(), seoFilesPlugin(siteUrl)],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      target: 'es2020',
      // Evita falha de build por assets grandes (fotos dos cookies)
      chunkSizeWarningLimit: 1200,
    },
    preview: {
      port: 4173,
      strictPort: true,
    },
    server: {
      port: 5173,
      strictPort: false,
    },
  }
})
