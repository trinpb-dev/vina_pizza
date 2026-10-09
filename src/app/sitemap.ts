export const dynamic = 'force-static';
import { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { pizzas } from '@/content/pizzas';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = site.url === 'TODO_CLIENT' ? 'https://vinapizza.vn' : site.url;
  
  const langs = ['vi', 'en'];
  const routes = [
    '',
    '/menu/pizzas',
    '/menu/combos',
    '/menu/restaurant-menu',
    '/visit-us',
    '/order',
    '/club'
  ];

  const map: MetadataRoute.Sitemap = [];

  for (const lang of langs) {
    for (const route of routes) {
      map.push({
        url: `${url}/${lang}${route}/`,
        lastModified: new Date(),
        alternates: {
          languages: {
            vi: `${url}/vi${route}/`,
            en: `${url}/en${route}/`,
            'x-default': `${url}/vi${route}/`
          }
        }
      });
    }

    for (const pizza of pizzas) {
      map.push({
        url: `${url}/${lang}/menu/pizzas/${pizza.slug}/`,
        lastModified: new Date(),
        alternates: {
          languages: {
            vi: `${url}/vi/menu/pizzas/${pizza.slug}/`,
            en: `${url}/en/menu/pizzas/${pizza.slug}/`,
            'x-default': `${url}/vi/menu/pizzas/${pizza.slug}/`
          }
        }
      });
    }
  }

  return map;
}
