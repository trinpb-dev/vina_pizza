import { combos } from '@/content/combos';
import { Photo } from '@/components/Photo';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { OrderChannels } from '@/components/OrderChannels';
import { getDictionary } from '@/content/i18n';


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as "vi" | "en";
  return {
    title: lang === "vi" ? "Combo" : "Combos",
  };
}

export default async function CombosPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  const t = getDictionary(lang);

  return (
    <div>
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Photo id="hero-combos" ratio="16/9" alt="Combos hero" className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-ink/40"></div>
        </div>
        <div className="relative z-10 px-4 max-w-4xl text-cream">
          <SectionHeading as="h1" className="mb-6 !text-cream">Made for sharing.</SectionHeading>
          <p className="font-playfair font-bold text-2xl md:text-3xl mb-4">
            {lang === 'vi' ? 'Pizza tuyệt hảo, khi cùng nhau thưởng thức.' : 'Great pizzas, better together.'}
          </p>
          <p className="font-lora text-lg md:text-xl text-cream/90">
            {lang === 'vi' ? 'Quây quần và chia sẻ khoảnh khắc vui vẻ cùng gia đình và bạn bè.' : 'Gather around and enjoy a delicious time with family and friends.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <SectionHeading as="h2">Pick your pizza night.</SectionHeading>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {combos.map((combo) => (
            <a href={`/${lang}/menu/restaurant-menu/#combos`} key={combo.slug} className="group block border border-line rounded-sm overflow-hidden bg-white hover:border-brand transition-colors">
              <div className="aspect-[16/10] overflow-hidden">
                <Photo id={`combo-${combo.slug}`} ratio="16/10" alt={combo.name} className="group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-playfair font-bold text-2xl mb-3 text-ink group-hover:text-brand transition-colors">{combo.name}</h3>
                <p className="font-lora text-muted">{combo.contents[lang]}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center border-t border-line pt-16">
          <h3 className="font-playfair font-bold text-3xl mb-6 text-ink">
            {lang === 'vi' ? 'Bạn đã sẵn sàng đặt món?' : 'Ready to order?'}
          </h3>
          <div className="flex justify-center mb-10">
            <OrderChannels variant="row" lang={lang} />
          </div>
          <Button href={`/${lang}/menu/restaurant-menu/`} variant="secondary">
            {t.viewRestaurantMenu}
          </Button>
          <p className="mt-4 font-lora text-sm text-muted">
            {lang === 'vi' ? 'Xem các lựa chọn pizza, giá cả và tùy chọn combo trong thực đơn nhà hàng.' : 'See pizza choices, prices and combo options on our restaurant menu.'}
          </p>
        </div>
      </div>
    </div>
  );
}
