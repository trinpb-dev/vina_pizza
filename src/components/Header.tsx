"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const otherLang = lang === "vi" ? "en" : "vi";
  const otherLangPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-line px-4 md:px-8 py-4 flex items-center justify-between">
      <Link href={`/${lang}/`} className="font-playfair font-black text-brand text-2xl tracking-tighter">
        VINA PIZZA
      </Link>
      
      <nav className="hidden md:flex gap-6 font-be-vietnam-pro text-sm uppercase tracking-wider font-semibold">
        <div className="group relative">
          <span className="cursor-pointer hover:text-brand transition-colors text-ink">Menu</span>
          <div className="absolute hidden group-hover:block top-full left-0 bg-cream border border-line shadow-lg p-4 min-w-[200px]">
            <Link href={`/${lang}/menu/pizzas/`} className="block py-2 hover:text-brand">Our Pizzas</Link>
            <Link href={`/${lang}/menu/combos/`} className="block py-2 hover:text-brand">Combos</Link>
            <Link href={`/${lang}/menu/restaurant-menu/`} className="block py-2 hover:text-brand">Restaurant Menu</Link>
          </div>
        </div>
        <Link href={`/${lang}/club/`} className="hover:text-brand transition-colors text-ink">Club</Link>
        <Link href={`/${lang}/visit-us/`} className="hover:text-brand transition-colors text-ink">Visit Us</Link>
      </nav>

      <div className="flex items-center gap-4 font-be-vietnam-pro text-sm font-semibold">
        <div className="flex gap-2">
          <Link href={pathname.replace(`/${lang}`, "/vi")} className={lang === "vi" ? "text-accent" : "text-muted hover:text-ink"}>VI</Link>
          <span className="text-line">|</span>
          <Link href={pathname.replace(`/${lang}`, "/en")} className={lang === "en" ? "text-accent" : "text-muted hover:text-ink"}>EN</Link>
        </div>
        <Link href={`/${lang}/order/`} className="hidden md:inline-flex bg-brand text-cream px-4 py-2 rounded-sm hover:bg-brand-dark">
          Order &nearr;
        </Link>
        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-16 bg-cream z-40 p-4 flex flex-col gap-4 font-be-vietnam-pro text-lg">
          <Link href={`/${lang}/menu/pizzas/`} onClick={() => setIsOpen(false)}>Our Pizzas</Link>
          <Link href={`/${lang}/menu/combos/`} onClick={() => setIsOpen(false)}>Combos</Link>
          <Link href={`/${lang}/menu/restaurant-menu/`} onClick={() => setIsOpen(false)}>Restaurant Menu</Link>
          <Link href={`/${lang}/club/`} onClick={() => setIsOpen(false)}>Club</Link>
          <Link href={`/${lang}/visit-us/`} onClick={() => setIsOpen(false)}>Visit Us</Link>
        </div>
      )}
    </header>
  );
}
