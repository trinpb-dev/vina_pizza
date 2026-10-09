export const site = {
  name: 'Vina Pizza',
  url: 'TODO_CLIENT',                  // final domain, e.g. https://vinapizza.vn
  defaultLang: 'vi',
  tagline: { en: 'Italian Soul, Made in Vietnam.', vi: 'Hồn Ý. Làm tại Việt Nam.' }, // Client placeholder updated from prompt example
  address: { en: '110 Xô Viết Nghệ Tĩnh, Bình Thạnh, HCMC', vi: '110 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP.HCM' },
  hours: { en: '11:00-14:00 · 17:00-22:00', vi: '11:00-14:00 · 17:00-22:00' },
  closedDay: { en: 'Closed Tuesdays', vi: 'Nghỉ thứ Ba' },
  phoneDisplay: '+84 931 441 137',     // TODO_CLIENT confirm
  phoneTel: '+84931441137',
  links: {
    grabFood: 'TODO_CLIENT',            // merchant URL
    shopeeFood: 'TODO_CLIENT',          // merchant URL
    googleMaps: 'TODO_CLIENT',          // share link of the verified Google Business listing
    fullMenuFile: null as string | null // optional PDF/JPG of printed menu, see 6.7
  },
  analytics: { ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? null },
};
