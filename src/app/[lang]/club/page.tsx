import { Photo } from '@/components/Photo';
import { Eyebrow } from '@/components/Eyebrow';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { getDictionary } from '@/content/i18n';


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as "vi" | "en";
  return {
    title: lang === "vi" ? "C�u l?c b?" : "Club",
  };
}

export default async function ClubPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'vi' | 'en';
  const t = getDictionary(lang);

  return (
    <div>
      <div className="relative h-[60vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <Photo id="hero-club" ratio="16/9" alt="Vina Pizza Club" className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-ink/60"></div>
        </div>
        <div className="relative z-10 max-w-2xl text-cream">
          <div className="mb-4 inline-block bg-accent text-white font-be-vietnam-pro font-semibold text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-sm">
            {lang === 'vi' ? 'Sắp ra mắt' : 'Coming Soon'}
          </div>
          <h1 className="font-playfair font-bold text-5xl md:text-7xl tracking-tight mb-6">
            Vina Pizza Club<span className="text-accent">.</span>
          </h1>
          <p className="font-lora text-xl text-cream/90 mb-10 leading-relaxed">
            {lang === 'vi' 
              ? 'Một điều mới mẻ đang đến với những tín đồ yêu thích pizza của chúng tôi.' 
              : 'Something new is on the way for our pizza lovers.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`/${lang}/menu/pizzas/`}>
              {lang === 'vi' ? 'Khám phá pizza' : 'Explore our pizzas'}
            </Button>
            <Button href={`/${lang}/menu/restaurant-menu/`} variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-brand">
              {t.viewRestaurantMenu}
            </Button>
          </div>
        </div>
      </div>

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-sm overflow-hidden border border-line">
            <Photo id="club-block" ratio="4/3" alt="Pizza gathering" />
          </div>
          <div className="w-full md:w-1/2">
            <SectionHeading as="h2" className="mb-6">
              {lang === 'vi' ? 'Trong thời gian chờ đợi, hãy tổ chức một đêm pizza.' : 'Until then, make it a pizza night.'}
            </SectionHeading>
            <p className="font-lora text-lg text-muted mb-8 leading-relaxed">
              {lang === 'vi' 
                ? 'Quây quần bên gia đình và bạn bè để thưởng thức những chiếc bánh pizza thủ công của chúng tôi.' 
                : 'Gather with family and friends and enjoy our handcrafted pizzas.'}
            </p>
            <Button href={`/${lang}/order/`}>
              {lang === 'vi' ? 'Đặt món ngay' : 'Order now'} &nearr;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
