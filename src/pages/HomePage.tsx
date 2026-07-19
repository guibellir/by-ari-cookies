import { useState } from 'react'
import { Link } from 'react-router-dom'
import { brand, faqItems, flavors, testimonials } from '../data/flavors'
import { getSortedPosts, formatPostDate } from '../data/blog'
import { buildStructuredData } from '../seo/structuredData'
import { Seo, JsonLd } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { WhatsAppIcon, InstagramIcon, IfoodIcon } from '../components/Icons'
import { whatsappLink } from '../lib/whatsapp'

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const structuredData = buildStructuredData()
  const latestPosts = getSortedPosts().slice(0, 3)

  return (
    <>
      <Seo
        title="By Ari | Cookies artesanais e gourmet em Aracaju-SE"
        description="By Ari — cookies artesanais e gourmet em Aracaju, Sergipe. Red Velvet, Double Chocolate e Tradicional. Peça pelo WhatsApp ou iFood."
        path="/"
        image="/images/logo.png"
        imageAlt="By Ari — cookies artesanais em Aracaju, Sergipe"
      />
      <JsonLd data={structuredData as object[]} />

      <main id="topo">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="hero-badge hero-reveal">
                🍪 Cookies artesanais em {brand.city}, {brand.state}
              </div>
              <h1 className="hero-reveal hero-reveal-delay-1">
                Cookies artesanais
                <br />
                em {brand.city}
                <br />
                <em>feitos com carinho</em>
              </h1>
              <p className="hero-text hero-reveal hero-reveal-delay-2">
                A {brand.name} faz cookies gourmet artesanais em {brand.city},{' '}
                {brand.state}: Red Velvet, Double Chocolate e Tradicional.
                Fresquinhos, sob demanda — peça pelo WhatsApp ou iFood. Cookie
                em Sergipe com sabor de verdade.
              </p>
              <div className="hero-actions hero-reveal hero-reveal-delay-3">
                <a className="btn btn-primary" href="#sabores">
                  Ver sabores
                </a>
                <a
                  className="btn btn-whatsapp"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
                <a
                  className="btn btn-ifood"
                  href={brand.ifood}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IfoodIcon />
                  iFood
                </a>
              </div>
              <div className="hero-stats hero-reveal hero-reveal-delay-4">
                <div className="stat">
                  <strong>
                    {flavors.filter((f) => f.available !== false).length}
                  </strong>
                  <span>sabores no cardápio</span>
                </div>
                <div className="stat">
                  <strong>100%</strong>
                  <span>artesanal</span>
                </div>
                <div className="stat">
                  <strong>{brand.city}</strong>
                  <span>atendimento local</span>
                </div>
              </div>
            </div>

            <div className="hero-visual hero-reveal-visual">
              <div className="cookie-stack">
                <div className="hero-logo-wrap">
                  <img
                    src="/images/logo.png"
                    alt="Logo By Ari — cookie artesanal e gourmet em Aracaju, Sergipe"
                    className="hero-logo"
                    width={320}
                    height={320}
                  />
                </div>
                <div className="floating-chip one">Red Velvet</div>
                <div className="floating-chip two">Double Chocolate</div>
                <div className="floating-chip three">Tradicional</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section flavors" id="sabores">
          <div className="container">
            <Reveal className="flavors-header">
              <div>
                <div className="section-label">Cardápio</div>
                <h2 className="section-title">
                  Sabores de cookie artesanal em {brand.city}
                </h2>
                <p className="section-lead">
                  Três cookies artesanais gourmet, feitos à mão em{' '}
                  {brand.city}-{brand.stateCode}. Em breve, novidades saindo do
                  forno — o cardápio cresce com a gente.
                </p>
              </div>
            </Reveal>

            <div className="flavor-grid">
              {flavors.map((flavor, index) => {
                const unavailable = flavor.available === false
                return (
                  <Reveal key={flavor.id} variant="up" delay={index}>
                    <article
                      className={`flavor-card ${unavailable ? 'unavailable' : ''}`}
                    >
                      <div
                        className={`flavor-media ${flavor.image ? 'has-photo' : ''}`}
                        style={
                          flavor.image
                            ? undefined
                            : { background: flavor.gradient }
                        }
                      >
                        {flavor.badge && (
                          <span className="flavor-badge">{flavor.badge}</span>
                        )}
                        {flavor.image ? (
                          <picture>
                            {flavor.imageMobile ? (
                              <source
                                media="(max-width: 719px)"
                                srcSet={flavor.imageMobile}
                              />
                            ) : null}
                            <img
                              src={flavor.image}
                              alt={
                                flavor.imageAlt ??
                                `Cookie ${flavor.name} artesanal By Ari em Aracaju, Sergipe`
                              }
                              className="flavor-photo"
                              loading="lazy"
                              width={1100}
                              height={1100}
                              decoding="async"
                            />
                          </picture>
                        ) : (
                          <span
                            className="emoji"
                            role="img"
                            aria-label={flavor.name}
                          >
                            {flavor.emoji}
                          </span>
                        )}
                      </div>
                      <div className="flavor-body">
                        <h3>{flavor.name}</h3>
                        <p>{flavor.shortDescription}</p>
                        <div className="flavor-tags">
                          {flavor.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section testimonials" id="depoimentos">
          <div className="container">
            <Reveal className="flavors-header">
              <div>
                <div className="section-label">Quem já provou</div>
                <h2 className="section-title">O que falam dos cookies</h2>
                <p className="section-lead">
                  Mensagens reais de clientes que pediram a {brand.name} em{' '}
                  {brand.city}. Prova de que o forno está no caminho certo.
                </p>
              </div>
            </Reveal>

            <div className="testimonial-grid">
              {testimonials.map((item, index) => (
                <Reveal key={item.id} variant="scale" delay={index % 4}>
                  <blockquote className="testimonial-card">
                    <div className="testimonial-quote-mark" aria-hidden="true">
                      “
                    </div>
                    {item.rating != null && (
                      <div
                        className="testimonial-stars"
                        aria-label={`${item.rating} de 5 estrelas`}
                      >
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={i < item.rating! ? 'on' : 'off'}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="testimonial-text">{item.quote}</p>
                    <footer className="testimonial-author">{item.author}</footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="container about-grid">
            <Reveal variant="left">
              <div className="about-card">
                <h2 className="about-heading">
                  Cookies artesanais e gourmet em {brand.city}, {brand.state}
                </h2>
                <p>
                  A {brand.name} nasceu em {brand.city}, {brand.state}, para quem
                  busca cookie de verdade: massa no ponto, ingredientes
                  selecionados e aquele aroma que invade a casa. Ideal para
                  presentear, celebrar ou se mimar no meio da semana — cookie
                  artesanal em {brand.city} feito sob demanda.
                </p>
                <ul className="about-points">
                  <li>
                    <span className="check">✓</span>
                    Receitas próprias, em lotes pequenos e frescos
                  </li>
                  <li>
                    <span className="check">✓</span>
                    Visual bonito para fotos, eventos e presentes
                  </li>
                  <li>
                    <span className="check">✓</span>
                    Pedido fácil: WhatsApp ou iFood em {brand.city}
                  </li>
                </ul>
              </div>
            </Reveal>

            <div className="feature-list">
              <Reveal variant="right" delay={0}>
                <div className="feature">
                  <div className="feature-icon">🧈</div>
                  <div>
                    <h3>Ingredientes de verdade</h3>
                    <p>
                      Manteiga, chocolate e baunilha de qualidade — sem atalhos
                      que estragam o sabor.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal variant="right" delay={1}>
                <div className="feature">
                  <div className="feature-icon">🔥</div>
                  <div>
                    <h3>Textura perfeita</h3>
                    <p>
                      Borda levemente crocante, miolo macio e derretendo. O
                      equilíbrio que vicia.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal variant="right" delay={2}>
                <div className="feature">
                  <div className="feature-icon">📍</div>
                  <div>
                    <h3>
                      De {brand.city} para {brand.city}
                    </h3>
                    <p>
                      Delivery e encomendas pensados para a nossa cidade em{' '}
                      {brand.state}. Pediu, combinamos o melhor jeito de receber.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {latestPosts.length > 0 && (
          <section className="section blog-teaser" id="blog-teaser">
            <div className="container">
              <Reveal className="flavors-header">
                <div>
                  <div className="section-label">Blog</div>
                  <h2 className="section-title">
                    Dicas de cookie em {brand.city} e {brand.state}
                  </h2>
                  <p className="section-lead">
                    Guias e novidades para quem busca cookie artesanal, gourmet
                    e encomendas em {brand.city}.
                  </p>
                </div>
                <Link to="/blog" className="btn btn-secondary blog-teaser-all">
                  Ver todos os artigos
                </Link>
              </Reveal>

              <div className="blog-grid">
                {latestPosts.map((post, index) => (
                  <Reveal key={post.slug} delay={index}>
                    <article className="blog-card">
                      {post.image && (
                        <Link
                          to={`/blog/${post.slug}`}
                          className="blog-card-media"
                        >
                          <img
                            src={post.image}
                            alt={post.imageAlt ?? post.title}
                            loading="lazy"
                            width={1400}
                            height={800}
                            decoding="async"
                          />
                        </Link>
                      )}
                      <div className="blog-card-body">
                        <time dateTime={post.date}>
                          {formatPostDate(post.date)}
                        </time>
                        <h3>
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.excerpt}</p>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="blog-card-link"
                        >
                          Ler artigo →
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section order" id="pedido">
          <div className="container">
            <Reveal variant="scale">
              <div className="order-panel">
                <div>
                  <div
                    className="section-label"
                    style={{ color: 'var(--caramel-soft)' }}
                  >
                    Encomendas
                  </div>
                  <h2>
                    Peça cookie artesanal em {brand.city} agora
                  </h2>
                  <p>
                    Encomende cookies artesanais pelo WhatsApp ou peça delivery no
                    iFood. Ideal para presente, lanche da tarde, reunião ou aquele
                    dia que só um cookie resolve — em {brand.city}, {brand.state}.
                  </p>
                  <div className="order-actions">
                    <a
                      className="btn btn-whatsapp"
                      href={whatsappLink(
                        `Olá, ${brand.name}! Quero encomendar cookies em ${brand.city}.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppIcon />
                      Pedir pelo WhatsApp
                    </a>
                    <a
                      className="btn btn-ifood"
                      href={brand.ifood}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IfoodIcon />
                      Pedir no iFood
                    </a>
                    <a
                      className="btn btn-secondary"
                      href={`https://www.instagram.com/${brand.instagram}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon />
                      Ver no Instagram
                    </a>
                  </div>
                </div>

                <div className="order-meta">
                  <div className="meta-item">
                    <strong>Cidade</strong>
                    <span>
                      {brand.city} — {brand.state}
                    </span>
                  </div>
                  <div className="meta-item">
                    <strong>WhatsApp</strong>
                    <a href={whatsappLink()} target="_blank" rel="noreferrer">
                      {brand.whatsappDisplay}
                    </a>
                  </div>
                  <div className="meta-item">
                    <strong>iFood</strong>
                    <a href={brand.ifood} target="_blank" rel="noreferrer">
                      By Ari — Cookies
                    </a>
                  </div>
                  <div className="meta-item">
                    <strong>Instagram</strong>
                    <a
                      href={`https://www.instagram.com/${brand.instagram}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{brand.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container">
            <Reveal className="flavors-header">
              <div>
                <div className="section-label">Dúvidas</div>
                <h2 className="section-title">Perguntas frequentes</h2>
                <p className="section-lead">
                  Tudo o que você precisa saber para pedir cookies artesanais da{' '}
                  {brand.name} em {brand.city}, {brand.state}.
                </p>
              </div>
            </Reveal>

            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index
                return (
                  <Reveal key={item.question} delay={Math.min(index, 5)}>
                    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button
                        type="button"
                        className="faq-question"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <span>{item.question}</span>
                        <span className="faq-icon" aria-hidden="true">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
