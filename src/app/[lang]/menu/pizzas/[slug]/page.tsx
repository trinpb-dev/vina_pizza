import { pizzas } from '@/content/pizzas';
import { Photo } from '@/components/Photo';
import { SectionHeading } from '@/components/SectionHeading';
import { Eyebrow } from '@/components/Eyebrow';
import { FeatureBadges } from '@/components/FeatureBadges';
import { OrderChannels } from '@/components/OrderChannels';
import { Button } from '@/components/Button';
import { getDictionary } from '@/content/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const langs = ['vi', 'en'];
  const params: { lang: string; slug: string }[] = [];
  
  for (const lang of langs) {
    for (const pizza of pizzas) {
      params.push({ lang, slug: pizza.slug });
    }
  }
  return params;
}


export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const resolvedParams = await params;
  const pizza = pizzas.find(p => p.slug === resolvedParams.slug);
  return {
    title: pizza ? pizza.name : "Pizza",
  };
}

export default async function PizzaDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  const slug = resolvedParams.slug;
  const pizza = pizzas.find(p => p.slug === slug);
  const t = getDictionary(lang);

  if (!pizza) {
    notFound();
  }

  return (
    <div>
      <div className="border-b border-line px-4 md:px-8 py-3 text-xs font-be-vietnam-pro font-semibold text-muted uppercase tracking-widest">
        <Link href={`/${lang}/`} className="hover:text-ink">Home</Link> / <Link href={`/${lang}/menu/pizzas/`} className="hover:text-ink">Menu</Link> / <span className="text-accent">{pizza.name}</span>
      </div>
      
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
        <div className="md:w-[55%] relative h-[50vh] md:h-auto">
          <Photo id={`pizza-${pizza.slug}`} ratio="4/3" alt={pizza.name} className="absolute inset-0 w-full h-full object-cover" priority />
        </div>
        <div className="md:w-[45%] bg-cream px-6 py-12 md:p-16 lg:p-24 flex flex-col justify-center">
          <Eyebrow>BÌNH THẠNH &middot; SAIGON</Eyebrow>
          <SectionHeading as="h1" className="mb-6">{pizza.name}</SectionHeading>
          
          <div className="mb-10">
            <h3 className="font-playfair font-bold text-xl mb-2 text-ink">
              {lang === 'vi' ? 'Nguyên liệu' : "What's on your pizza"}
            </h3>
            <p className="font-lora text-lg text-muted leading-relaxed">
              {pizza.ingredients[lang]}
            </p>
          </div>

          <div className="mb-12">
            <FeatureBadges />
          </div>

          <div className="bg-white/50 p-6 rounded-sm border border-line mb-10">
            <h3 className="font-playfair font-bold text-xl mb-4 text-ink">{t.orderYourWay}</h3>
            <OrderChannels variant="row" lang={lang} />
            <p className="mt-4 text-xs font-lora text-muted italic">
              {lang === 'vi' ? 'Giá trên ứng dụng giao hàng và các chương trình khuyến mãi có thể khác.' : 'Delivery app prices and promotions may differ.'}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <Button href={`/${lang}/menu/restaurant-menu/#pizzas`} className="w-full">
                {t.viewRestaurantMenu}
              </Button>
              <p className="text-center mt-3 text-sm font-lora text-muted">
                {lang === 'vi' ? 'Xem các kích cỡ, giá cả và combo trong thực đơn nhà hàng.' : 'See sizes, prices and combos on our restaurant menu.'}
              </p>
            </div>
            <div className="text-center">
              <Link href={`/${lang}/menu/pizzas/`} className="font-be-vietnam-pro font-semibold text-accent text-sm uppercase tracking-widest hover:text-brand transition-colors">
                &larr; {lang === 'vi' ? 'Xem tất cả pizza' : 'Explore all pizzas'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
