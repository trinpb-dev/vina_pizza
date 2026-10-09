import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { site } from '@/content/site';

// The not-found page is a global UI, we don't have access to the URL lang param inside it easily without middleware parsing,
// so we make it explicitly bilingual (showing both English and Vietnamese).
export default function NotFoundPage() {
  return (
    <html lang={site.defaultLang}>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-cream font-lora">
          <SectionHeading as="h1" className="mb-4">404.</SectionHeading>
          <p className="text-xl mb-2 text-ink">Page not found</p>
          <p className="text-xl mb-8 text-ink">Không tìm thấy trang</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={`/${site.defaultLang}/`}>
              Go to Home / Trang chủ
            </Button>
            <Button href={`/${site.defaultLang}/order/`} variant="secondary">
              Order now / Đặt món ngay
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
