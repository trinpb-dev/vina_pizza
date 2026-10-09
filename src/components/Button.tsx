"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  trackMaps?: boolean;
};

export function Button({ href, variant = "primary", children, className = "", onClick, trackMaps }: ButtonProps) {
  const pathname = usePathname();
  const base = "inline-flex items-center justify-center font-lora font-medium py-3 px-6 rounded-sm transition-colors text-center";
  const styles = {
    primary: "bg-brand text-cream hover:bg-brand-dark",
    secondary: "border border-brand text-brand hover:bg-brand hover:text-cream"
  };

  const css = `${base} ${styles[variant]} ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    if (trackMaps && site.analytics.ga4Id && typeof window !== "undefined" && (window as any).gtag) {
      const lang = pathname.startsWith("/vi") ? "vi" : "en";
      (window as any).gtag("event", "order_click", {
        channel: "maps",
        page: pathname,
        lang: lang
      });
    }
    if (onClick) onClick();
  };

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={css} onClick={handleClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={css} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className={css}>
      {children}
    </button>
  );
}
