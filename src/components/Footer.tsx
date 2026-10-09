import Link from "next/link";
import { site } from "@/content/site";

export function Footer({ lang }: { lang: "vi" | "en" }) {
  return (
    <footer className="bg-cream border-t border-line px-4 md:px-8 py-12 md:py-16 text-muted font-lora">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="font-playfair font-black text-brand text-3xl mb-2">VP.</div>
          <p className="text-xl italic">{site.tagline[lang]}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p>{site.address[lang]}</p>
          <p>{site.hours[lang]} &middot; {site.closedDay[lang]}</p>
          <p><a href={`tel:${site.phoneTel}`} className="hover:text-brand">{site.phoneDisplay}</a></p>
          <div className="flex gap-4 mt-2">
            <Link href={`/${lang}/menu/restaurant-menu/`} className="hover:text-brand underline">Restaurant menu</Link>
            <a href={site.links.googleMaps} target="_blank" rel="noopener noreferrer" className="hover:text-brand underline">Google Maps</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
