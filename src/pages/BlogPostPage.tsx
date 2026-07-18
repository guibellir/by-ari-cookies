import { Link, useParams } from 'react-router-dom'
import { brand, getSiteUrl } from '../data/flavors'
import {
  formatPostDate,
  getPostBySlug,
  getSortedPosts,
  type BlogBlock,
} from '../data/blog'
import { Seo, JsonLd } from '../components/Seo'
import { whatsappLink } from '../lib/whatsapp'
import { WhatsAppIcon } from '../components/Icons'

function BlockView({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>
    case 'h2':
      return <h2>{block.text}</h2>
    case 'ul':
      return (
        <ul className="blog-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'cta':
      return (
        <div className="blog-cta">
          <p>{block.text}</p>
          <Link to={block.href} className="btn btn-primary">
            {block.label}
          </Link>
        </div>
      )
    default:
      return null
  }
}

export function BlogPostPage() {
  const { slug = '' } = useParams()
  const post = getPostBySlug(slug)
  const site = getSiteUrl()
  const others = getSortedPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2)

  if (!post) {
    return (
      <>
        <Seo
          title={`Artigo não encontrado | ${brand.name}`}
          description="Este artigo não existe ou foi movido."
          path={`/blog/${slug}`}
          noIndex
        />
        <main className="blog-page">
          <div className="container blog-not-found">
            <h1>Artigo não encontrado</h1>
            <p>Esse post pode ter sido movido ou ainda não existe.</p>
            <Link to="/blog" className="btn btn-primary">
              Voltar ao blog
            </Link>
          </div>
        </main>
      </>
    )
  }

  const url = `${site}/blog/${post.slug}`
  const imageUrl = post.image
    ? `${site}${post.image}`
    : `${site}/images/logo.png`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: url,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: brand.name,
      url: site,
    },
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      logo: {
        '@type': 'ImageObject',
        url: `${site}/images/logo.png`,
      },
    },
    inLanguage: 'pt-BR',
    keywords: [post.primaryKeyword, ...post.tags].join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: `${site}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${site}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  }

  return (
    <>
      <Seo
        title={`${post.title} | ${brand.name}`}
        description={post.description}
        path={`/blog/${post.slug}`}
        image={post.image ?? '/images/logo.png'}
        imageAlt={post.imageAlt ?? post.title}
        type="article"
        publishedTime={post.date}
      />
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <main className="blog-page">
        <article className="blog-article">
          <header className="blog-article-header">
            <div className="container blog-article-header-inner">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link to="/">Início</Link>
                <span aria-hidden="true">/</span>
                <Link to="/blog">Blog</Link>
                <span aria-hidden="true">/</span>
                <span>{post.title}</span>
              </nav>
              <div className="blog-article-meta">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span>{post.tags.join(' · ')}</span>
              </div>
              <h1>{post.title}</h1>
              <p className="blog-article-lead">{post.excerpt}</p>
            </div>
          </header>

          {post.image && (
            <div className="container">
              <figure className="blog-article-figure">
                <img
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  width={1400}
                  height={800}
                  decoding="async"
                />
              </figure>
            </div>
          )}

          <div className="container blog-article-body">
            {post.body.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}

            <div className="blog-article-order">
              <p>
                Peça cookies artesanais da {brand.name} em {brand.city} pelo
                WhatsApp ou iFood.
              </p>
              <a
                className="btn btn-whatsapp"
                href={whatsappLink(
                  `Olá, ${brand.name}! Li o blog e quero pedir cookies em ${brand.city}.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                Pedir pelo WhatsApp
              </a>
            </div>
          </div>
        </article>

        {others.length > 0 && (
          <section className="section blog-related">
            <div className="container">
              <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
                Continue lendo
              </h2>
              <div className="blog-grid">
                {others.map((p) => (
                  <article key={p.slug} className="blog-card">
                    {p.image && (
                      <Link
                        to={`/blog/${p.slug}`}
                        className="blog-card-media"
                      >
                        <img
                          src={p.image}
                          alt={p.imageAlt ?? p.title}
                          loading="lazy"
                          width={1400}
                          height={800}
                          decoding="async"
                        />
                      </Link>
                    )}
                    <div className="blog-card-body">
                      <time dateTime={p.date}>{formatPostDate(p.date)}</time>
                      <h3>
                        <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                      </h3>
                      <Link to={`/blog/${p.slug}`} className="blog-card-link">
                        Ler artigo →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
