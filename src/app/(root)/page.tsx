import { site } from '@/content/site';

export default function RootPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0; url=/${site.defaultLang}/`} />
      </head>
      <body></body>
    </html>
  );
}
