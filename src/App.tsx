import { useEffect, useState } from 'react'
import { brand, faqItems, flavors, testimonials } from './data/flavors'
import { buildStructuredData } from './seo/structuredData'
import './App.css'

function whatsappLink(message?: string) {
  // Sem emoji: alguns clientes do WhatsApp quebram o texto no final da URL
  const text =
    message ??
    `Olá! Vim pelo site da ${brand.name} e gostaria de saber mais sobre os cookies.`
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const structuredData = buildStructuredData()

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={`ld-json-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#topo" className="logo" onClick={closeMenu}>
            <img
              src="/images/logo.png"
              alt="By Ari — cookies artesanais em Aracaju"
              className="logo-img"
              width={42}
              height={42}
            />
            <span className="logo-text">
              by <em>Ari</em>
            </span>
          </a>

          <nav className="nav" aria-label="Principal">
            <a href="#sabores">Sabores</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#sobre">Sobre</a>
            <a href="#pedido">Pedir</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            className="btn btn-primary header-cta"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            Pedir no WhatsApp
          </a>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`container mobile-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#sabores" onClick={closeMenu}>
            Sabores
          </a>
          <a href="#depoimentos" onClick={closeMenu}>
            Depoimentos
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#pedido" onClick={closeMenu}>
            Pedir
          </a>
          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>
          <a
            className="btn btn-primary"
            style={{ marginTop: '0.75rem' }}
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Pedir no WhatsApp
          </a>
        </div>
      </header>

      <main id="topo">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="hero-badge">
                🍪 Cookies artesanais em {brand.city}, {brand.state}
              </div>
              <h1>
                Cookies artesanais
                <br />
                feitos com
                <br />
                <em>carinho</em>
              </h1>
              <p className="hero-text">
                A {brand.name} faz cookies gourmet artesanais em {brand.city},{' '}
                {brand.state}: Red Velvet, Double Chocolate e Tradicional.
                Fresquinhos, sob demanda — peça pelo WhatsApp ou iFood.
              </p>
              <div className="hero-actions">
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
              <div className="hero-stats">
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

            <div className="hero-visual">
              <div className="cookie-stack">
                <div className="hero-logo-wrap">
                  <img
                    src="/images/logo.png"
                    alt="Logo By Ari cookies artesanais Aracaju"
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
            <div className="flavors-header">
              <div>
                <div className="section-label">Cardápio</div>
                <h2 className="section-title">
                  Sabores de cookie em {brand.city}
                </h2>
                <p className="section-lead">
                  Três cookies artesanais gourmet, feitos à mão em{' '}
                  {brand.city}-{brand.stateCode}. Em breve, novidades saindo do
                  forno — o cardápio cresce com a gente.
                </p>
              </div>
            </div>

            <div className="flavor-grid">
              {flavors.map((flavor) => {
                const unavailable = flavor.available === false
                return (
                  <article
                    key={flavor.id}
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
                              `Cookie ${flavor.name} artesanal By Ari em Aracaju`
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
                )
              })}
            </div>
          </div>
        </section>

        <section className="section testimonials" id="depoimentos">
          <div className="container">
            <div className="flavors-header">
              <div>
                <div className="section-label">Quem já provou</div>
                <h2 className="section-title">O que falam dos cookies</h2>
                <p className="section-lead">
                  Mensagens reais de clientes que pediram a {brand.name}.
                  Prova de que o forno está no caminho certo.
                </p>
              </div>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <blockquote key={item.id} className="testimonial-card">
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
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="container about-grid">
            <div className="about-card">
              <h2 className="about-heading">
                Cookies artesanais e gourmet em {brand.city}
              </h2>
              <p>
                A {brand.name} nasceu em {brand.city}, {brand.state}, para quem
                busca cookie de verdade: massa no ponto, ingredientes
                selecionados e aquele aroma que invade a casa. Ideal para
                presentear, celebrar ou se mimar no meio da semana.
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

            <div className="feature-list">
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
              <div className="feature">
                <div className="feature-icon">📍</div>
                <div>
                  <h3>
                    De {brand.city} para {brand.city}
                  </h3>
                  <p>
                    Delivery e encomendas pensados para a nossa cidade. Pediu,
                    combinamos o melhor jeito de receber.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section order" id="pedido">
          <div className="container">
            <div className="order-panel">
              <div>
                <div
                  className="section-label"
                  style={{ color: 'var(--caramel-soft)' }}
                >
                  Encomendas
                </div>
                <h2>Peça cookies em {brand.city} agora</h2>
                <p>
                  Encomende cookies artesanais pelo WhatsApp ou peça delivery no
                  iFood. Ideal para presente, lanche da tarde, reunião ou aquele
                  dia que só um cookie resolve.
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
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container">
            <div className="flavors-header">
              <div>
                <div className="section-label">Dúvidas</div>
                <h2 className="section-title">Perguntas frequentes</h2>
                <p className="section-lead">
                  Tudo o que você precisa saber para pedir cookies artesanais da{' '}
                  {brand.name} em {brand.city}.
                </p>
              </div>
            </div>

            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index
                return (
                  <div
                    key={item.question}
                    className={`faq-item ${isOpen ? 'open' : ''}`}
                  >
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
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img
              src="/images/logo.png"
              alt="By Ari"
              className="footer-logo"
              width={44}
              height={44}
            />
            <p>
              © {new Date().getFullYear()} {brand.name}. Cookies artesanais e
              gourmet em {brand.city}, {brand.state}.
            </p>
          </div>
          <div className="footer-links">
            <a href="#sabores">Sabores</a>
            <a href="#pedido">Pedir</a>
            <a href="#faq">FAQ</a>
            <a
              href={`https://www.instagram.com/${brand.instagram}/`}
              target="_blank"
              rel="noreferrer"
            >
              @{brand.instagram}
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

/** Ícone de sacola (estilo delivery / iFood) */
function IfoodIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 8h12l-1 13H7L6 8z" fill="currentColor" stroke="none" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" fill="none" />
      <path d="M10 12v4M14 12v4" stroke="white" strokeWidth="1.6" />
    </svg>
  )
}

export default App
