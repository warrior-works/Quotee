import type { RequestHandler } from './$types';
import { siteConfig } from '$lib/seo';

export const GET: RequestHandler = async () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
