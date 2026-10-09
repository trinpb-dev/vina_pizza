import { site } from '@/content/site';
import { pizzas } from '@/content/pizzas';
import { combos } from '@/content/combos';
import { menuPrices, formatVND } from '@/content/menu-prices';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { getDictionary } from '@/content/i18n';
import Link from 'next/link';


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as "vi" | "en";
  return {
    title: lang === "vi" ? "Th?c don nh� h�ng" : "Restaurant menu",
  };
}

export default async function RestaurantMenuPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  const t = getDictionary(lang);

  const p32Keys = Object.keys(menuPrices.pizzas32cm);
  const p25Keys = Object.keys(menuPrices.pizzas25cm);

  const getPizzaName = (slug: string) => pizzas.find(p => p.slug === slug)?.name || slug;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 print:py-4">
      <div className="text-center mb-16 print:mb-8">
        <SectionHeading as="h1" className="mb-4">Restaurant menu.</SectionHeading>
        <p className="font-playfair font-bold text-2xl text-ink mb-2">
          {lang === 'vi' ? 'Giá dùng tại quán & mang về.' : 'In-store & takeaway prices.'}
        </p>
        <p className="font-lora text-muted">
          {t.pricesAtRestaurantNote}
        </p>
      </div>

      <div className="bg-white border border-line rounded-sm p-8 md:p-16 lg:px-24 mb-16 shadow-sm print:border-none print:shadow-none print:p-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 print:gap-8">
          
          <div className="lg:col-span-2 space-y-16 print:space-y-8">
            <section id="pizzas" className="scroll-mt-32">
              <h2 className="font-be-vietnam-pro font-bold text-xl uppercase tracking-widest text-brand border-b border-line pb-4 mb-8">
                Pizzas &middot; 32 cm
              </h2>
              <ul className="space-y-6">
                {p32Keys.map(slug => (
                  <li key={slug} className="flex justify-between items-baseline gap-4">
                    <Link href={`/${lang}/menu/pizzas/${slug}/`} className="font-playfair font-bold text-xl text-ink hover:text-brand hover:underline decoration-1 underline-offset-4">
                      {getPizzaName(slug)}
                    </Link>
                    <span className="font-lora text-lg text-ink font-medium shrink-0">
                      {formatVND(menuPrices.pizzas32cm[slug as keyof typeof menuPrices.pizzas32cm], lang)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-be-vietnam-pro font-bold text-xl uppercase tracking-widest text-brand border-b border-line pb-4 mb-8">
                Pizzas &middot; 25 cm
              </h2>
              <ul className="space-y-6">
                {p25Keys.map(slug => (
                  <li key={slug} className="flex justify-between items-baseline gap-4">
                    <Link href={`/${lang}/menu/pizzas/${slug}/`} className="font-playfair font-bold text-xl text-ink hover:text-brand hover:underline decoration-1 underline-offset-4">
                      {getPizzaName(slug)}
                    </Link>
                    <span className="font-lora text-lg text-ink font-medium shrink-0">
                      {formatVND(menuPrices.pizzas25cm[slug as keyof typeof menuPrices.pizzas25cm], lang)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-16 print:space-y-8">
            <section id="combos" className="scroll-mt-32">
              <h2 className="font-be-vietnam-pro font-bold text-xl uppercase tracking-widest text-brand border-b border-line pb-4 mb-8">
                Combos
              </h2>
              <ul className="space-y-8 mb-6">
                {combos.map(combo => (
                  <li key={combo.slug}>
                    <div className="flex justify-between items-baseline gap-4 mb-1">
                      <span className="font-playfair font-bold text-xl text-ink">{combo.name}</span>
                      <span className="font-lora text-lg text-ink font-medium shrink-0">
                        {formatVND(menuPrices.combos[combo.slug as keyof typeof menuPrices.combos], lang)}
                      </span>
                    </div>
                    <div className="font-lora text-muted text-sm">{combo.contents[lang]}</div>
                  </li>
                ))}
              </ul>
              <div className="bg-cream border border-line p-4 rounded-sm font-lora text-sm text-ink italic">
                {menuPrices.comboNote[lang]}
              </div>
            </section>

            <section>
              <h2 className="font-be-vietnam-pro font-bold text-xl uppercase tracking-widest text-brand border-b border-line pb-4 mb-8">
                {lang === 'vi' ? 'Thêm topping' : 'Extra toppings'}
              </h2>
              <ul className="space-y-4">
                {Object.entries(menuPrices.extraToppings).map(([name, price]) => (
                  <li key={name} className="flex justify-between items-baseline gap-4">
                    <span className="font-lora text-ink">{name}</span>
                    <span className="font-lora text-ink font-medium">
                      {formatVND(price, lang)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 print:hidden">
        <Button href={`tel:${site.phoneTel}`}>
          {lang === 'vi' ? `Gọi để đặt món ${site.phoneDisplay}` : `Call to order ${site.phoneDisplay}`}
        </Button>
        {site.links.fullMenuFile && (
          <a href={site.links.fullMenuFile} target="_blank" rel="noopener noreferrer" className="font-be-vietnam-pro font-semibold text-accent text-sm uppercase tracking-widest hover:text-brand transition-colors">
            {lang === 'vi' ? 'Xem menu PDF chi tiết' : 'View full-size menu'}
          </a>
        )}
      </div>

    </div>
  );
}
