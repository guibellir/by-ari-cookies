import { useEffect, useState } from 'react'
import { brand, flavors } from './data/flavors'
import './App.css'

function whatsappLink(message?: string) {
  const text =
    message ??
    `Olá! Vim pelo site da ${brand.name} e gostaria de saber mais sobre os cookies 🍪`
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#topo" className="logo" onClick={closeMenu}>
            <span className="logo-mark" aria-hidden="true" />
            By Ari
          </a>

          <nav className="nav" aria-label="Principal">
            <a href="#sabores">Sabores</a>
            <a href="#sobre">Sobre</a>
            <a href="#pedido">Pedir</a>
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
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#pedido" onClick={closeMenu}>
            Pedir
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
              <div className="hero-badge">🍪 Feito com carinho em {brand.city}</div>
              <h1>
                Cookies artesanais
                <br />
                que <em>derretem</em>
                <br />
                na memória
              </h1>
              <p className="hero-text">
                {brand.name} — cookies gourmet, fresquinhos e feitos sob demanda
                para quem mora em {brand.city}, {brand.state}. Do red velvet ao
                double chocolate: cada mordida conta uma história.
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
                  Fazer pedido
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <strong>{flavors.filter((f) => f.available !== false).length}</strong>
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

            <div className="hero-visual" aria-hidden="true">
              <div className="cookie-stack">
                <div className="cookie-orb main" />
                <div className="cookie-orb small" />
                <div className="cookie-orb tiny" />
                <div className="floating-chip one">Red Velvet</div>
                <div className="floating-chip two">Double Chocolate</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section flavors" id="sabores">
          <div className="container">
            <div className="flavors-header">
              <div>
                <div className="section-label">Cardápio</div>
                <h2 className="section-title">Sabores que conquistam</h2>
                <p className="section-lead">
                  Começamos com três clássicos gourmet. Em breve, novidades
                  saindo do forno — o cardápio cresce com a gente.
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
                      className="flavor-media"
                      style={{ background: flavor.gradient }}
                    >
                      {flavor.badge && (
                        <span className="flavor-badge">{flavor.badge}</span>
                      )}
                      <span className="emoji" role="img" aria-label={flavor.name}>
                        {flavor.emoji}
                      </span>
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

        <section className="section" id="sobre">
          <div className="container about-grid">
            <div className="about-card">
              <h3>Feito à mão, com alma de padaria de bairro e padrão gourmet.</h3>
              <p>
                Na {brand.name}, cada cookie é preparado com ingredientes
                selecionados, massa no ponto certo e aquele aroma que invade a
                casa. Nascemos em {brand.city} para ser o pedido favorito da
                sua semana — seja para presentear, celebrar ou só se mimar.
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
                  Atendimento próximo, direto no WhatsApp
                </li>
              </ul>
            </div>

            <div className="feature-list">
              <div className="feature">
                <div className="feature-icon">🧈</div>
                <div>
                  <h4>Ingredientes de verdade</h4>
                  <p>
                    Manteiga, chocolate e baunilha de qualidade — sem atalhos
                    que estragam o sabor.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🔥</div>
                <div>
                  <h4>Textura perfeita</h4>
                  <p>
                    Borda levemente crocante, miolo macio e derretendo. O
                    equilíbrio que vicia.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">📍</div>
                <div>
                  <h4>De {brand.city} para {brand.city}</h4>
                  <p>
                    Divulgação e entrega pensadas para a nossa cidade. Pediu,
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
                <div className="section-label" style={{ color: 'var(--caramel-soft)' }}>
                  Encomendas
                </div>
                <h2>Quer um cookie quentinho na sua porta?</h2>
                <p>
                  Chama no WhatsApp, escolhe os sabores e a quantidade. Ideal
                  para presente, lanche da tarde, reunião ou aquele dia que só
                  um cookie resolve.
                </p>
                <div className="order-actions">
                  <a
                    className="btn btn-whatsapp"
                    href={whatsappLink(
                      `Olá, ${brand.name}! Quero encomendar cookies em ${brand.city} 🍪`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon />
                    Pedir pelo WhatsApp
                  </a>
                  <a
                    className="btn btn-secondary"
                    href={`https://instagram.com/${brand.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  <strong>Instagram</strong>
                  <a
                    href={`https://instagram.com/${brand.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{brand.instagram}
                  </a>
                </div>
                <div className="meta-item">
                  <strong>E-mail</strong>
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {brand.name}. Cookies artesanais em{' '}
            {brand.city}, {brand.state}.
          </p>
          <div className="footer-links">
            <a href="#sabores">Sabores</a>
            <a href="#pedido">Pedir</a>
            <a
              href={`https://instagram.com/${brand.instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default App
