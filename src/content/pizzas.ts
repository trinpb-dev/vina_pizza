export type Pizza = {
  slug: string;
  order: number;              // display order and "01 -" index
  name: string;               // same in both languages
  ingredients: { vi: string; en: string };
  featuredOnHome?: boolean;   // Home shows 3
  draft?: boolean;            // true = description not yet confirmed by client
};

export const pizzas: Pizza[] = [
  {
    order: 1,
    slug: 'margherita',
    name: 'Margherita',
    ingredients: { 
      en: 'Tomato sauce, mozzarella, basil and olive oil.',
      vi: 'Sốt cà chua, phô mai mozzarella, húng quế và dầu ô liu.'
    },
    featuredOnHome: true,
  },
  {
    order: 2,
    slug: 'diavola-pepperoni',
    name: 'Diavola Pepperoni',
    ingredients: {
      en: 'Tomato sauce, mozzarella, spicy pepperoni, chili oil.',
      vi: 'Sốt cà chua, phô mai mozzarella, xúc xích cay pepperoni, dầu sa tế.'
    },
    featuredOnHome: true,
    draft: true
  },
  {
    order: 3,
    slug: 'roasted-chicken',
    name: 'Roasted Chicken',
    ingredients: {
      en: 'Tomato sauce, mozzarella, roasted chicken, onion, herbs.',
      vi: 'Sốt cà chua, phô mai mozzarella, gà nướng, hành tây, thảo mộc.'
    },
    draft: true
  },
  {
    order: 4,
    slug: 'chicken-cream',
    name: 'Chicken Cream Pizza',
    ingredients: {
      en: 'Cream sauce, mozzarella, chicken, mushroom.',
      vi: 'Sốt kem, phô mai mozzarella, gà, nấm.'
    },
    draft: true
  },
  {
    order: 5,
    slug: 'hawaiian',
    name: 'Hawaiian',
    ingredients: {
      en: 'Tomato sauce, mozzarella, ham, pineapple.',
      vi: 'Sốt cà chua, phô mai mozzarella, thịt nguội, dứa.'
    },
    draft: true
  },
  {
    order: 6,
    slug: 'capricciosa',
    name: 'Capricciosa',
    ingredients: {
      en: 'Tomato sauce, mozzarella, ham, mushroom, artichoke, olives.',
      vi: 'Sốt cà chua, phô mai mozzarella, thịt nguội, nấm, atisô, ô liu.'
    },
    draft: true
  },
  {
    order: 7,
    slug: 'ham-mushroom',
    name: 'Ham & Mushroom',
    ingredients: {
      en: 'Tomato sauce, mozzarella, ham, mushroom.',
      vi: 'Sốt cà chua, phô mai mozzarella, thịt nguội, nấm.'
    },
    draft: true
  },
  {
    order: 8,
    slug: 'vegetariana',
    name: 'Vegetariana',
    ingredients: {
      en: 'Tomato sauce, mozzarella, bell pepper, zucchini, mushroom, olives.',
      vi: 'Sốt cà chua, phô mai mozzarella, ớt chuông, ngòi tây, nấm, ô liu.'
    },
    draft: true
  },
  {
    order: 9,
    slug: 'seafood',
    name: 'Seafood',
    ingredients: {
      en: 'Tomato sauce, mozzarella, shrimp, squid, mussels.',
      vi: 'Sốt cà chua, phô mai mozzarella, tôm, mực, vẹm xanh.'
    },
    draft: true
  },
  {
    order: 10,
    slug: 'creamy-seafood',
    name: 'Creamy Seafood',
    ingredients: {
      en: 'Cream sauce, mozzarella, shrimp, squid.',
      vi: 'Sốt kem, phô mai mozzarella, tôm, mực.'
    },
    draft: true
  },
  {
    order: 11,
    slug: 'triple-cheese',
    name: 'Triple Cheese',
    ingredients: {
      en: 'Mozzarella, cheddar, parmesan.',
      vi: 'Phô mai mozzarella, phô mai cheddar, phô mai parmesan.'
    },
    featuredOnHome: true,
    draft: true
  }
];
