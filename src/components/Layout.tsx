import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { brand } from '../data/flavors'
import { whatsappLink } from '../lib/whatsapp'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const closeMenu = () => setMenuOpen(false)
  const isHome = location.pathname === '/'

  /** Logo / "by Ari": sempre volta à home no topo (mesmo se já estiver nela). */
  const goHomeTop = (event: MouseEvent<HTMLAnchorElement>) => {
    closeMenu()

    if (isHome) {
      event.preventDefault()
      if (location.hash) {
        navigate('/', { replace: true })
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Em outras páginas o <Link> navega para / e o effect rola ao topo
  }

  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`)

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <Link
            to="/"
            className="logo"
            onClick={goHomeTop}
            aria-label="Ir para o início — By Ari"
          >
            <img
              src="/images/logo.png"
              alt="By Ari — cookies artesanais e gourmet em Aracaju, Sergipe"
              className="logo-img"
              width={42}
              height={42}
            />
            <span className="logo-text">
              by <em>Ari</em>
            </span>
          </Link>

          <nav className="nav" aria-label="Principal">
            <a href={sectionHref('#sabores')}>Sabores</a>
            <a href={sectionHref('#depoimentos')}>Depoimentos</a>
            <a href={sectionHref('#sobre')}>Sobre</a>
            <a href={sectionHref('#pedido')}>Pedir</a>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Blog
            </NavLink>
            <a href={sectionHref('#faq')}>FAQ</a>
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
          <a href={sectionHref('#sabores')} onClick={closeMenu}>
            Sabores
          </a>
          <a href={sectionHref('#depoimentos')} onClick={closeMenu}>
            Depoimentos
          </a>
          <a href={sectionHref('#sobre')} onClick={closeMenu}>
            Sobre
          </a>
          <a href={sectionHref('#pedido')} onClick={closeMenu}>
            Pedir
          </a>
          <NavLink to="/blog" onClick={closeMenu}>
            Blog
          </NavLink>
          <a href={sectionHref('#faq')} onClick={closeMenu}>
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

      {children}

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img
              src="/images/logo.png"
              alt="Logo By Ari cookies artesanais Aracaju"
              className="footer-logo"
              width={44}
              height={44}
            />
            <p>
              © {new Date().getFullYear()} {brand.name}. Cookies artesanais e
              gourmet em {brand.city}, {brand.state}. Cookie artesanal sob
              demanda — peça pelo WhatsApp ou iFood.
            </p>
          </div>
          <div className="footer-links">
            <a href={sectionHref('#sabores')}>Sabores</a>
            <a href={sectionHref('#pedido')}>Pedir</a>
            <Link to="/blog">Blog</Link>
            <a href={sectionHref('#faq')}>FAQ</a>
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
