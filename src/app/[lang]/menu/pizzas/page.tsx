import { pizzas } from '@/content/pizzas';
import { Photo } from '@/components/Photo';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { getDictionary } from '@/content/i18n';


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as "vi" | "en";
  return {
    title: lang === "vi" ? "Pizza c?a ch�ng t�i" : "Our pizzas",
  };
}

export default async function OurPizzasPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  const t = getDictionary(lang);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="mb-12">
        <SectionHeading as="h1" className="mb-4">Our pizzas</SectionHeading>
        <p className="font-lora text-lg text-muted max-w-2xl">
          {lang === 'vi' ? 'Tìm chiếc bánh yêu thích của bạn. Khám phá sự đặc biệt của từng loại.' : 'Find your favourite. Discover what makes each one special.'}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
        {pizzas.map((pizza) => (
          <Link href={`/${lang}/menu/pizzas/${pizza.slug}/`} key={pizza.slug} className="group block">
            <div className="aspect-[4/3] w-full rounded-sm overflow-hidden mb-4 border border-line">
              <Photo id={`pizza-${pizza.slug}`} ratio="4/3" alt={pizza.name} className="group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="font-playfair font-bold text-xl md:text-2xl text-ink group-hover:text-brand transition-colors mb-2">
              {pizza.name}
            </h2>
            <div className="font-be-vietnam-pro font-semibold text-accent text-sm flex items-center gap-2">
              {lang === 'vi' ? 'Khám phá bánh này' : 'Discover this pizza'} &rarr;
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-brand text-cream rounded-sm p-8 md:p-12 text-center flex flex-col items-center justify-center">
        <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4">
          {lang === 'vi' ? 'Thực đơn toàn bộ nhà hàng' : 'The full restaurant menu'}
        </h2>
        <p className="font-lora max-w-lg mb-8 text-cream/90 text-lg">
          {lang === 'vi' ? 'Giá cả, các combo và món ăn kèm, tất cả ở cùng một nơi.' : 'Prices, combos and extra toppings, all in one place.'}
        </p>
        <Button href={`/${lang}/menu/restaurant-menu/`} variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-brand">
          {t.viewRestaurantMenu}
        </Button>
      </div>
    </div>
  );
}
