export const siteConfig = {
  name: 'Quotee',
  title: 'Quotee - Create quotes that hit.',
  shortDescription:
    'Quotee is a free quote maker to create beautiful quote images, quote snapshots, and social-ready quote posts in seconds.',
  description:
    'Quotee is a free online quote maker and quote creator. Create beautiful quote images, quote snapshots, and social-ready quote posts with custom themes, fonts, alignment, and export options.',
  url: 'https://quotee.aashuu.tech',
  ogImage: 'https://quotee.aashuu.tech/og-image.jpg',
  locale: 'en_US',
  creator: 'aashuu',
  creatorUrl: 'https://www.aashuu.tech/'
} as const;

export const seoKeywords = [
  'quotee',
  'quote maker',
  'quotes maker',
  'quote creator',
  'quotes creator',
  'create quote images',
  'quotes creation tool',
  'quote snapshot',
  'best quotes image maker',
  'social media quote generator',
  'online quote tool',
  'free quote maker'
] as const;

export const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.creator,
      url: siteConfig.creatorUrl
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: siteConfig.name,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    isAccessibleForFree: true,
    url: siteConfig.url,
    description: siteConfig.description,
    image: siteConfig.ogImage,
    browserRequirements: 'Requires JavaScript and a modern web browser.',
    author: {
      '@type': 'Person',
      name: siteConfig.creator,
      url: siteConfig.creatorUrl
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Quotee',
    url: siteConfig.url,
    logo: `${siteConfig.url}/Quotee.png`,
    sameAs: ['https://www.aashuu.tech/', 'https://x.com/warrioraashuu']
  }
] as const;
