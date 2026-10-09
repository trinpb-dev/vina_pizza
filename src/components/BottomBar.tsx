import Link from "next/link";

export function BottomBar({ lang }: { lang: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand text-cream flex md:hidden h-14 z-50 font-be-vietnam-pro font-semibold text-sm">
      <Link href={`/${lang}/menu/pizzas/`} className="flex-1 flex items-center justify-center border-r border-brand-dark hover:bg-brand-dark">
        Menu
      </Link>
      <Link href={`/${lang}/order/`} className="flex-1 flex items-center justify-center hover:bg-brand-dark">
        Order &nearr;
      </Link>
    </div>
  );
}
