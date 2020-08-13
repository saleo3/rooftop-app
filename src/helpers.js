

export function getTitle(obj) {
  return Object.keys(obj).map(key => obj[key].title);
}

export function checkSubcategories(menu) {
  const custom = [{
    translations: { "en": { "title": "" }, "es": { "title": "" } },
    products: menu.products
  }]

  return menu.subcategories.length === 0
    ? custom
    : menu.subcategories
}

export async function loadData(callback) {
  const api = await fetch('https://api.adminsite.appsinti.com/menu/product');
  const data = await api.json();
  callback(data);
}

export function checkArray(arr) {
  return callback => arr.length > 0 ? callback() : [];
}

export function filterProducts(products, search) {
  return products.filter(product => {
    const [enTitle, esTitle] = getTitle(product.translations)
    return enTitle.toLowerCase().includes(search) || esTitle.toLowerCase().includes(search)
  }
  );
}
