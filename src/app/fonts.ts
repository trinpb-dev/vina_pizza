import { Playfair_Display, Lora, Be_Vietnam_Pro } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  weight: ['700', '800', '900'],
  variable: '--font-playfair',
});

export const lora = Lora({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  variable: '--font-lora',
});

export const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['600'],
  variable: '--font-be-vietnam-pro',
});
