import React, { useState, useEffect } from 'react';
import './MenuSubCategory.css';
import { getTitle } from '../helpers';
import arrowIcon from '../assets/arrow-icon.svg';

function SubcategoryItem({ isActive = false, product }) {
  const [enTitle, esTitle] = getTitle(product.translations);

  return (
    <div className={`subcategory-content ${isActive ? 'subcategory-content__active' : ''}`}>
      <div className="product">{enTitle}</div>
      <div className="translation">{esTitle}</div>
    </div>
  );
}

function MenuSubcategory({ products = [], showProducts }) {
  const [text, product] = products;
  const [isActive, openPanel] = useState(false);
  const [enTitle, esTitle] = getTitle(text);

  useEffect(() => {
    openPanel(showProducts);
  }, [showProducts])

  return (
    <div className={`subcategory-container ${isActive ? 'subcategory-container__active' : ''}`}>
      <div className={`subcategory-header ${showProducts ? 'hide' : ''}`} onClick={() => openPanel(!isActive)}>
        <span>{`${enTitle} (${esTitle})`}</span>
        <img src={arrowIcon} alt="arrow icon" className={isActive ? 'active' : ''} />
      </div>
      {product.map((p, i) => <SubcategoryItem isActive={isActive} product={p} key={i} />)}
    </div>
  );
}

export default MenuSubcategory;