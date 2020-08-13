import React from 'react';
import SearchInput from './SearchInput';
import MenuSubcategory from './MenuSubcategory';
import { getTitle, checkArray, filterProducts } from '../helpers';
import './Menu.css';

function Menu({ subcategories, searchText, handler }) {
  // Check if theres data and the filter by search and map the result
  const addCallback = checkArray(subcategories);
  const products = addCallback(() => {
    return subcategories
      .filter(subcategory => filterProducts(subcategory.products, searchText).length)
      .map(subcategory => [subcategory.translations, filterProducts(subcategory.products, searchText)])
  });

  // This one is only when there's no subcategories but just products
  const showProducts = subcategories.length > 0 ? getTitle(subcategories[0].translations)[0] === '' : false;

  return (
    <div className="menu">
      <SearchInput text={searchText} handler={handler} />
      {products.map(
        (product, i) => <MenuSubcategory products={product} key={i} showProducts={showProducts} />
      )}
    </div>
  );
}

export default Menu;