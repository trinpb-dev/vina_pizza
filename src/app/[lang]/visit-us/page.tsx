import { site } from '@/content/site';
import { Photo } from '@/components/Photo';
import { Eyebrow } from '@/components/Eyebrow';
import { SectionHeading } from '@/components/SectionHeading';
import { FeatureBadges } from '@/components/FeatureBadges';
import { InfoStrip } from '@/components/InfoStrip';
import { Button } from '@/components/Button';
import { getDictionary } from '@/content/i18n';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  return {
    title: lang === 'vi' ? 'Ghé thăm' : 'Visit us',
  };
}

export default async function VisitUsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  const t = getDictionary(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: site.name,
    image: `${site.url}/images/og-default-800.webp`,
    url: site.url,
    telephone: site.phoneTel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address[lang]
    },
    servesCuisine: 'Pizza',
    priceRange: '₫₫',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '11:00',
        closes: '22:00'
      }
    ],
    hasMenu: `${site.url}/${lang}/menu/restaurant-menu/`
  };

  return (
    <div>
      <Script
        id="json-ld-restaurant"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        <div className="md:w-1/2 flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24 bg-cream">
          <Eyebrow>BÌNH THẠNH &middot; HCMC</Eyebrow>
          <SectionHeading as="h1" className="mb-6 leading-none">
            {lang === 'vi' ? 'Điểm đến pizza của bạn tại Bình Thạnh.' : 'Your pizza spot in Bình Thạnh.'}
          </SectionHeading>
          <p className="font-lora text-lg text-muted mb-10 max-w-md leading-relaxed">
            {lang === 'vi' 
              ? 'Tham gia cùng chúng tôi cho bữa trưa, bữa tối hoặc đêm pizza tiếp theo của bạn.' 
              : 'Join us for lunch, dinner or your next pizza night.'}
          </p>
          <FeatureBadges />
        </div>
        <div className="md:w-1/2 relative h-[50vh] md:h-auto border-l border-line">
          <Photo id="hero-visit" ratio="16/9" alt="Dough hands" className="absolute inset-0 object-cover" priority />
        </div>
      </section>

      {/* Info Block */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-line">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-sm overflow-hidden border border-line">
            <Photo id="visit-block" ratio="4/3" alt="Restaurant interior" />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeading as="h2" className="mb-8 max-w-md">
              {lang === 'vi' ? 'Đến với một chiếc bụng đói. Chúng tôi sẽ lo phần pizza.' : "Come hungry. We'll handle the pizza."}
            </SectionHeading>
            
            <div className="bg-cream border border-line p-8 rounded-sm mb-8">
              <InfoStrip lang={lang} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={site.links.googleMaps} trackMaps>
                {lang === 'vi' ? 'Xem chỉ đường' : 'Get directions'}
              </Button>
              <Button href={`tel:${site.phoneTel}`} variant="secondary">
                {lang === 'vi' ? 'Gọi nhà hàng' : 'Call the restaurant'}
              </Button>
            </div>
            <div className="mt-6">
              <a href={`/${lang}/menu/restaurant-menu/`} className="font-be-vietnam-pro font-semibold text-accent text-sm uppercase tracking-widest hover:text-brand transition-colors">
                {t.viewRestaurantMenu} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      {site.links.googleMaps && site.links.googleMaps !== 'TODO_CLIENT' && (
        <section className="bg-cream border-b border-line p-4 md:p-8">
          <div className="max-w-7xl mx-auto aspect-video rounded-sm overflow-hidden border border-line bg-white flex items-center justify-center font-lora text-muted">
            <p>{lang === 'vi' ? 'Bản đồ Google sẽ xuất hiện ở đây (Cần có mã nhúng iframe).' : 'Google Map embed will appear here (Requires iframe code).'}</p>
          </div>
        </section>
      )}
    </div>
  );
}
