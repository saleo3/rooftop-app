import React, { useState, useEffect } from 'react';
import './MenuSubCategory.css'
import arrowIcon from '../assets/arrow-icon.svg';


function SubcategoryItem({isActive = false, product}) {
  return (
    <div className={`subcategory-content ${isActive ? 'subcategory-content__active' : ''}`}>
      <div className="product">{product.translations.en.title}</div>
      <div className="translation">{product.translations.es.title}</div>
    </div>
  );
}

function MenuSubcategory({products = [], showProducts}) {
  const [text, product] = products;
  const [isActive, openPanel] = useState(false);

    useEffect(() => {
      openPanel(showProducts);
    }, [showProducts])

  return (
    <div className={`subcategory-container ${isActive ? 'subcategory-container__active' : ''}`}>
      <div className={`subcategory-header ${showProducts? 'hide': ''}`} onClick={() => openPanel(!isActive)}>
        <span>{`${text.en.title} (${text.es.title})`}</span>
        <img src={arrowIcon} alt="arrow icon" className={isActive ? 'active' : '' } />
      </div>
      {product.length > 0 && product.map((p, i) => <SubcategoryItem isActive={isActive} product={p} key={i}/>)}
    </div>
  );
}

export default MenuSubcategory;