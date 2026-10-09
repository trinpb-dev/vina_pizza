import { site } from "@/content/site";

export function InfoStrip({ lang }: { lang: "vi" | "en" }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 text-sm text-muted font-lora">
      <div>
        <strong>{lang === "vi" ? "Địa chỉ" : "Address"}:</strong><br/>
        {site.address[lang]}
      </div>
      <div>
        <strong>{lang === "vi" ? "Giờ mở cửa" : "Hours"}:</strong><br/>
        {site.hours[lang]}<br/>
        {site.closedDay[lang]}
      </div>
      <div>
        <strong>{lang === "vi" ? "Điện thoại" : "Phone"}:</strong><br/>
        <a href={`tel:${site.phoneTel}`} className="text-brand hover:underline">{site.phoneDisplay}</a>
      </div>
    </div>
  );
}
