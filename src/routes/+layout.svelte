<script lang="ts">
  import '../app.css';
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import { seoKeywords, siteConfig, structuredData } from '$lib/seo';

  injectAnalytics({ mode: dev ? 'development' : 'production' });

  afterNavigate(() => {
    const gtag = (window as any).gtag;
    if (typeof gtag === 'function') {
      gtag('config', 'G-1J0S11JS4J', { page_path: page.url.pathname });
    }
  });

  const keywords = seoKeywords.join(', ');
  const structuredDataJson = JSON.stringify(structuredData);
</script>

<svelte:head>
  <title>{siteConfig.title}</title>
  <meta name="description" content={siteConfig.description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={siteConfig.creator} />
  <meta name="creator" content={siteConfig.creator} />
  <meta name="publisher" content={siteConfig.creator} />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="theme-color" content="#ffffff" />
  <link rel="canonical" href={siteConfig.url} />
  <link rel="alternate" hrefLang="en" href={siteConfig.url} />
  <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={siteConfig.name} />
  <meta property="og:locale" content={siteConfig.locale} />
  <meta property="og:url" content={siteConfig.url} />
  <meta property="og:title" content={siteConfig.title} />
  <meta property="og:description" content={siteConfig.shortDescription} />
  <meta property="og:image" content={siteConfig.ogImage} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={siteConfig.url} />
  <meta name="twitter:title" content={siteConfig.title} />
  <meta name="twitter:description" content={siteConfig.shortDescription} />
  <meta name="twitter:image" content={siteConfig.ogImage} />

  <script type="application/ld+json">
    {structuredDataJson}
  </script>
</svelte:head>

<slot />
