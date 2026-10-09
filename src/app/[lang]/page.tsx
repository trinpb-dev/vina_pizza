import { site } from '@/content/site';
import { pizzas } from '@/content/pizzas';
import { Photo } from '@/components/Photo';
import { Eyebrow } from '@/components/Eyebrow';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { OrderChannels } from '@/components/OrderChannels';
import { InfoStrip } from '@/components/InfoStrip';
import Link from 'next/link';
import { getDictionary } from '@/content/i18n';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  return {
    title: lang === 'vi' ? 'Trang chủ' : 'Home',
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  const t = getDictionary(lang);
  const featuredPizzas = pizzas.filter(p => p.featuredOnHome).slice(0, 3);

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
      {/* 1. Hero split */}
      <section className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        <div className="md:w-1/2 flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24 bg-cream">
          <Eyebrow>BÌNH THẠNH &middot; SAIGON</Eyebrow>
          <SectionHeading as="h1" className="mb-6 leading-none">
            {lang === 'vi' ? 'Hồn Ý. Làm tại Việt Nam.' : 'Italian soul. Made in Vietnam.'}
          </SectionHeading>
          <p className="font-lora text-lg text-muted mb-8 max-w-md leading-relaxed">
            {lang === 'vi' 
              ? 'Mẻ bánh nóng hổi tại Bình Thạnh. Sẵn sàng cho đêm pizza tiếp theo của bạn.' 
              : 'Freshly baked in Bình Thạnh. Ready for your next pizza night.'}
          </p>
          <div>
            <Button href={`/${lang}/menu/pizzas/`}>
              {t.exploreMenu}
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative h-[50vh] md:h-auto border-l border-line">
          <Photo id="hero-home" ratio="4/3" alt="Home hero pizza" className="absolute inset-0 object-cover" priority />
        </div>
      </section>

      {/* 2. Meet your next favourite */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-line">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <SectionHeading as="h2">
                {lang === 'vi' ? 'Khám phá hương vị yêu thích tiếp theo.' : 'Meet your next favourite.'}
              </SectionHeading>
            </div>
            <Link href={`/${lang}/menu/restaurant-menu/`} className="font-be-vietnam-pro font-semibold text-accent text-sm uppercase tracking-widest hover:text-brand transition-colors shrink-0">
              {lang === 'vi' ? 'Xem toàn bộ thực đơn' : 'See the full menu'} &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza) => (
              <Link href={`/${lang}/menu/pizzas/${pizza.slug}/`} key={pizza.slug} className="group flex md:block items-center gap-6">
                <div className="w-1/3 md:w-full aspect-[4/3] rounded-sm overflow-hidden border border-line mb-0 md:mb-6 shrink-0">
                  <Photo id={`pizza-${pizza.slug}`} ratio="4/3" alt={pizza.name} className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl md:text-2xl text-ink group-hover:text-brand transition-colors mb-2">{pizza.name}</h3>
                  <div className="hidden md:block font-be-vietnam-pro font-semibold text-accent text-xs tracking-widest uppercase">
                    {lang === 'vi' ? 'Khám phá' : 'Discover'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Combo band */}
      <section className="bg-brand text-cream flex flex-col md:flex-row items-center border-b border-brand-dark">
        <div className="md:w-1/2 p-8 md:p-16 lg:p-24 w-full">
          <div className="font-be-vietnam-pro font-semibold text-cream/70 text-xs uppercase tracking-widest mb-4">
            {lang === 'vi' ? 'Combo Gia đình & Bạn bè' : 'Family & Friends Combo'}
          </div>
          <h2 className="font-playfair font-bold text-3xl md:text-5xl mb-6 leading-tight">
            {lang === 'vi' ? 'Ba pizza. Ba thức uống. Một đêm tuyệt vời.' : 'Three pizzas. Three drinks. One good night.'}
          </h2>
          <Button href={`/${lang}/menu/combos/`} variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-brand">
            {lang === 'vi' ? 'Khám phá combo' : 'Explore combos'}
          </Button>
        </div>
        <div className="md:w-1/2 w-full aspect-[4/3] md:aspect-auto md:h-full relative shrink-0 min-h-[300px]">
          <Photo id="combo-band" ratio="4/3" alt="Combo band" className="absolute inset-0 object-cover" />
        </div>
      </section>

      {/* 4. Intro & 5. Club teaser */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 rounded-full border border-brand/20 flex items-center justify-center mb-6 text-brand font-playfair font-black text-xl">
              VP
            </div>
            <SectionHeading as="h2" className="mb-4">
              {lang === 'vi' ? 'Điểm đến pizza của bạn tại Bình Thạnh.' : 'Your pizza spot in Bình Thạnh.'}
            </SectionHeading>
            <p className="font-lora text-lg text-muted">
              {lang === 'vi' 
                ? 'Chúng tôi mang tâm hồn ẩm thực Ý đến Sài Gòn, phục vụ những chiếc bánh nướng thủ công mỗi ngày.' 
                : 'We bring the Italian culinary soul to Saigon, serving handcrafted baked pizzas every single day.'}
            </p>
          </div>
          
          <Link href={`/${lang}/club/`} className="block border border-line p-8 md:p-12 rounded-sm bg-white hover:border-brand transition-colors group">
            <div className="flex justify-between items-start mb-16">
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-ink group-hover:text-brand transition-colors">Vina Pizza Club</h3>
              <span className="font-be-vietnam-pro text-[10px] uppercase tracking-widest bg-line/50 px-3 py-1 text-muted rounded-full">
                {lang === 'vi' ? 'Sắp ra mắt' : 'Coming soon'}
              </span>
            </div>
            <p className="font-lora text-lg text-muted">
              {lang === 'vi' ? 'Hãy theo dõi. Sẽ có nhiều điều thú vị.' : 'Stay close. More to come.'}
            </p>
          </Link>
        </div>
      </section>

      {/* 6. At our place. Or yours. */}
      <section className="py-20 px-6 md:px-12 bg-white border-t border-line">
        <div className="max-w-7xl mx-auto">
          <SectionHeading as="h2" className="mb-12 text-center">
            {lang === 'vi' ? 'Tại quán chúng tôi. Hoặc nhà bạn.' : 'At our place. Or yours.'}
          </SectionHeading>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between p-8 bg-cream border border-line rounded-sm">
            <InfoStrip lang={lang} />
            <div className="border-t lg:border-t-0 lg:border-l border-line pt-8 lg:pt-0 lg:pl-12 w-full lg:w-auto">
              <OrderChannels variant="row" lang={lang} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
