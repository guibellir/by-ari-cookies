import { brand, faqItems, flavors, testimonials } from '../data/flavors'

/** JSON-LD para LocalBusiness + Menu + FAQ (SEO local) */
export function buildStructuredData() {
  const site = brand.siteUrl.replace(/\/$/, '')
  const availableFlavors = flavors.filter((f) => f.available !== false)

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['Bakery', 'LocalBusiness'],
    '@id': `${site}/#business`,
    name: brand.name,
    alternateName: 'By Ari Cookies',
    description:
      'Cookies artesanais e gourmet em Aracaju, Sergipe. Sabores Red Velvet, Double Chocolate e Tradicional. Peça pelo WhatsApp ou iFood.',
    url: site,
    image: `${site}/images/logo.png`,
    logo: `${site}/images/logo.png`,
    telephone: `+${brand.whatsapp}`,
    priceRange: '$$',
    servesCuisine: 'Cookies artesanais',
    address: {
      '@type': 'PostalAddress',
      addressLocality: brand.city,
      addressRegion: brand.stateCode,
      addressCountry: brand.country,
    },
    areaServed: {
      '@type': 'City',
      name: `${brand.city}, ${brand.state}`,
    },
    sameAs: [
      `https://www.instagram.com/${brand.instagram}/`,
      brand.ifood.split('?')[0],
    ],
    hasMenu: {
      '@type': 'Menu',
      name: 'Cardápio de cookies',
      hasMenuSection: {
        '@type': 'MenuSection',
        name: 'Cookies artesanais',
        hasMenuItem: availableFlavors.map((f) => ({
          '@type': 'MenuItem',
          name: f.name,
          description: f.shortDescription,
          image: f.image ? `${site}${f.image}` : undefined,
        })),
      },
    },
    potentialAction: [
      {
        '@type': 'OrderAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: brand.ifood,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModeOwnFleet',
      },
    ],
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site}/#website`,
    url: site,
    name: `${brand.name} — Cookies artesanais em ${brand.city}`,
    description: brand.tagline,
    publisher: { '@id': `${site}/#business` },
    inLanguage: 'pt-BR',
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const reviews =
    testimonials.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: `Cookies artesanais ${brand.name}`,
          description: brand.tagline,
          brand: { '@type': 'Brand', name: brand.name },
          review: testimonials.map((t) => ({
            '@type': 'Review',
            reviewBody: t.quote,
            author: {
              '@type': 'Person',
              name: t.author,
            },
            ...(t.rating != null
              ? {
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: t.rating,
                    bestRating: 5,
                  },
                }
              : {}),
          })),
        }
      : null

  return [localBusiness, webSite, faqPage, reviews].filter(Boolean)
}

