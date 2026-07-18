import { Link } from 'react-router-dom'
import { brand, getSiteUrl } from '../data/flavors'
import { formatPostDate, getSortedPosts } from '../data/blog'
import { Seo, JsonLd } from '../components/Seo'

export function BlogPage() {
  const posts = getSortedPosts()
  const site = getSiteUrl()

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `Blog ${brand.name} — cookies em ${brand.city}`,
    description: `Artigos sobre cookie artesanal, gourmet e encomendas em ${brand.city}, ${brand.state}.`,
    url: `${site}/blog`,
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      logo: `${site}/images/logo.png`,
    },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${site}/blog/${p.slug}`,
      image: p.image ? `${site}${p.image}` : undefined,
    })),
  }

  return (
    <>
      <Seo
        title={`Blog | Cookie artesanal em ${brand.city} e ${brand.state} — ${brand.name}`}
        description={`Dicas e guias da ${brand.name}: cookie artesanal em ${brand.city}, cookie em ${brand.state}, sabores e como pedir.`}
        path="/blog"
        image="/images/cookie-red-velvet-aracaju-mobile.jpg"
        imageAlt={`Cookie artesanal By Ari em ${brand.city}`}
      />
      <JsonLd data={collectionSchema} />

      <main className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Início</Link>
              <span aria-hidden="true">/</span>
              <span>Blog</span>
            </nav>
            <div className="section-label">Blog By Ari</div>
            <h1 className="section-title">
              Cookie artesanal em {brand.city} e {brand.state}
            </h1>
            <p className="section-lead">
              Guias, dicas de sabores e tudo sobre cookies gourmet da{' '}
              {brand.name} — para quem pesquisa cookie em {brand.state} e quer
              pedir com confiança em {brand.city}.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="blog-grid blog-grid-page">
              {posts.map((post) => (
                <article key={post.slug} className="blog-card">
                  {post.image && (
                    <Link
                      to={`/blog/${post.slug}`}
                      className="blog-card-media"
                    >
                      <img
                        src={post.image}
                        alt={post.imageAlt ?? post.title}
                        loading="lazy"
                        width={600}
                        height={600}
                        decoding="async"
                      />
                    </Link>
                  )}
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <time dateTime={post.date}>
                        {formatPostDate(post.date)}
                      </time>
                      <span className="blog-card-tags">
                        {post.tags.slice(0, 2).join(' · ')}
                      </span>
                    </div>
                    <h2>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="blog-card-link">
                      Ler artigo →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
