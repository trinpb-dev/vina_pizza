import type { Metadata } from 'next';
import { site } from '@/content/site';
import { playfairDisplay, lora, beVietnamPro } from '../fonts';
import '../globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BottomBar } from '@/components/BottomBar';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL(site.url === 'TODO_CLIENT' ? 'https://vinapizza.vn' : site.url),
  title: {
    template: '%s | Vina Pizza Bình Thạnh',
    default: 'Vina Pizza Bình Thạnh',
  },
  description: 'Italian Soul, Made in Vietnam.',
  openGraph: {
    images: [{ url: '/images/og-default-800.webp', width: 800, height: 600 }]
  }
};

export function generateStaticParams() {
  return [{ lang: 'vi' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  return (
    <html lang={resolvedParams.lang} className={`${playfairDisplay.variable} ${lora.variable} ${beVietnamPro.variable}`}>
      <head>
        {site.analytics.ga4Id && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.analytics.ga4Id}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${site.analytics.ga4Id}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="flex flex-col min-h-screen">
        <Header lang={resolvedParams.lang} />
        <main className="flex-1 pb-14 md:pb-0">
          {children}
        </main>
        <Footer lang={resolvedParams.lang as 'vi' | 'en'} />
        <BottomBar lang={resolvedParams.lang} />
      </body>
    </html>
  );
}
