export const dynamic = 'force-static';
import { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function robots(): MetadataRoute.Robots {
  const url = site.url === 'TODO_CLIENT' ? 'https://vinapizza.vn' : site.url;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
