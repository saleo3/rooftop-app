import React, { useState } from 'react';
import SearchInput from './SearchInput';
import MenuSubcategory from './MenuSubcategory';
import './Menu.css'

function Menu({ subcategories }) {
  const [searchText, searchHandler] = useState('');
  const products = subcategories.length > 0
    ? subcategories.map(subcategory => [subcategory.translations, subcategory.products])
    : [];
  const showProducts = subcategories.length > 0
    ? subcategories[0].translations.en.title === ''
    : false;

  return (
    <div className="menu">
      <SearchInput text={searchText} handler={event => searchHandler(event.target.value)} />
      {products.map(
        (product, i) => <MenuSubcategory products={product} key={i} showProducts={showProducts} />
      )}
    </div>
  );
}

export default Menu;