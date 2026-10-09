import { site } from '@/content/site';
import { Photo } from '@/components/Photo';
import { Eyebrow } from '@/components/Eyebrow';
import { SectionHeading } from '@/components/SectionHeading';
import { OrderChannels } from '@/components/OrderChannels';
import { InfoStrip } from '@/components/InfoStrip';
import { getDictionary } from '@/content/i18n';
import Link from 'next/link';


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as "vi" | "en";
  return {
    title: lang === "vi" ? "�?t m�n" : "Order",
  };
}

export default async function OrderPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  const t = getDictionary(lang);

  return (
    <div>
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <Photo id="hero-order" ratio="16/9" alt="Order hero" className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-cream/90 backdrop-blur-sm border-b border-line"></div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <Eyebrow>ORDER NOW</Eyebrow>
          <SectionHeading as="h1" className="mb-6">
            {lang === 'vi' ? 'Chiếc pizza tiếp theo của bạn bắt đầu từ đây.' : 'Your next pizza starts here.'}
          </SectionHeading>
          <p className="font-lora text-lg text-muted max-w-xl mx-auto leading-relaxed">
            {lang === 'vi' 
              ? 'Chọn cách bạn muốn đặt món. Thưởng thức Vina Pizza tại nhà, văn phòng hoặc mang đi trên đường.' 
              : "Choose how you'd like to order. Enjoy Vina Pizza at home, at the office or pick up on the go."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 -mt-20 relative z-20">
        <div className="bg-white p-8 md:p-12 lg:p-16 border border-line rounded-sm shadow-sm">
          <OrderChannels variant="cards" lang={lang} />
          
          <div className="mt-16 text-center border-t border-line pt-12">
            <Link href={`/${lang}/menu/restaurant-menu/`} className="inline-flex items-center justify-center font-lora font-medium py-3 px-6 rounded-sm transition-colors border border-brand text-brand hover:bg-brand hover:text-cream mb-4">
              {t.viewRestaurantMenu}
            </Link>
            <p className="font-lora text-sm text-muted">
              {lang === 'vi' ? 'Giá cả và khuyến mãi có thể khác nhau tùy theo kênh đặt hàng.' : 'Prices and promotions may vary by ordering channel.'}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cream border-t border-line py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-playfair font-black text-brand text-3xl mb-1">VP.</div>
            <p className="font-lora italic text-muted text-sm">{site.tagline[lang]}</p>
          </div>
          <div className="w-full max-w-2xl bg-white border border-line p-6 rounded-sm">
            <InfoStrip lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
