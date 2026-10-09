// TODO_CLIENT confirm all prices
export const menuPrices = {
  pizzas32cm: {
    'margherita': 169000,
    'diavola-pepperoni': 199000,
    'roasted-chicken': 189000,
    'chicken-cream': 189000,
    'hawaiian': 209000,
    'capricciosa': 219000,
    'ham-mushroom': 169000,
    'vegetariana': 199000,
    'seafood': 199000,
    'creamy-seafood': 219000,
    'triple-cheese': 239000
  },
  pizzas25cm: {
    'margherita': 139000,
    'diavola-pepperoni': 159000,
    'chicken-cream': 149000,
    'creamy-seafood': 159000,
    'ham-mushroom': 169000,
    'triple-cheese': 169000
  },
  combos: {
    'duo': 299000,
    'duo-plus': 339000,
    'trio': 469000
  },
  comboNote: {
    en: '+10,000đ per Ham & Mushroom or Triple Cheese pizza in a combo.',
    vi: 'Phụ thu 10.000đ cho mỗi pizza Ham & Mushroom hoặc Triple Cheese trong combo.'
  },
  extraToppings: {
    'Extra cheese': 20000,
    'Ham': 20000,
    'Seafood': 30000,
    'Blue cheese': 25000,
    'Vegetables': 15000
  }
};

export function formatVND(amount: number, lang: 'vi' | 'en'): string {
  if (lang === 'vi') {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  }
  return new Intl.NumberFormat('en-US').format(amount) + 'đ';
}
