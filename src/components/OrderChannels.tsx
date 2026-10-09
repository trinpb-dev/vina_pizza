"use client";
import Link from "next/link";
import { site } from "@/content/site";
import { usePathname } from "next/navigation";

type Props = {
  variant?: "row" | "cards";
  lang: string;
};

export function OrderChannels({ variant = "row", lang }: Props) {
  const pathname = usePathname();
  
  const channels = [
    { id: "grab", name: "GrabFood", url: site.links.grabFood, color: "bg-grab text-white" },
    { id: "shopee", name: "ShopeeFood", url: site.links.shopeeFood, color: "bg-shopee text-white" },
    { id: "call", name: lang === "vi" ? "Gọi nhà hàng" : "Call the restaurant", url: `tel:${site.phoneTel}`, color: "bg-brand text-cream" }
  ];

  const trackClick = (channelId: string) => {
    if (site.analytics.ga4Id && typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "order_click", {
        channel: channelId,
        page: pathname,
        lang: lang
      });
    }
  };

  if (variant === "cards") {
    return (
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {channels.map(c => (
          <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" onClick={() => trackClick(c.id)} className={`flex-1 p-6 rounded-sm text-center ${c.color} hover:opacity-90 transition-opacity`}>
            <span className="font-be-vietnam-pro font-bold text-lg">{c.name}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {channels.map(c => (
        <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" onClick={() => trackClick(c.id)} className={`px-4 py-2 rounded-sm text-sm font-be-vietnam-pro font-bold ${c.color} hover:opacity-90`}>
          {c.name}
        </a>
      ))}
    </div>
  );
}
