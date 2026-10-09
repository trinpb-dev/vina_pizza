export type ImageSpec = {
  id: string;
  ratio: string;
};

export const imageSpec: ImageSpec[] = [
  { id: 'hero-home', ratio: '4/3' },
  { id: 'combo-band', ratio: '4/3' },
  { id: 'hero-combos', ratio: '16/9' },
  { id: 'combo-duo', ratio: '16/10' },
  { id: 'combo-duo-plus', ratio: '16/10' },
  { id: 'combo-trio', ratio: '16/10' },
  { id: 'hero-visit', ratio: '16/9' },
  { id: 'visit-block', ratio: '4/3' },
  { id: 'hero-order', ratio: '16/9' },
  { id: 'hero-club', ratio: '16/9' },
  { id: 'club-block', ratio: '4/3' },
  { id: 'og-default', ratio: '1200/630' },
  
  // Pizzas
  { id: 'pizza-margherita', ratio: '4/3' },
  { id: 'pizza-diavola-pepperoni', ratio: '4/3' },
  { id: 'pizza-roasted-chicken', ratio: '4/3' },
  { id: 'pizza-chicken-cream', ratio: '4/3' },
  { id: 'pizza-hawaiian', ratio: '4/3' },
  { id: 'pizza-capricciosa', ratio: '4/3' },
  { id: 'pizza-ham-mushroom', ratio: '4/3' },
  { id: 'pizza-vegetariana', ratio: '4/3' },
  { id: 'pizza-seafood', ratio: '4/3' },
  { id: 'pizza-creamy-seafood', ratio: '4/3' },
  { id: 'pizza-triple-cheese', ratio: '4/3' }
];
