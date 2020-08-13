import React, { useState, useEffect } from 'react';
import './MenuSubCategory.scss';
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

function MenuSubcategory({ products = [], isActive, handler }) {
  const [text, product] = products;
  const [enTitle, esTitle] = getTitle(text);

  return (
    <div className={`subcategory-container ${isActive ? 'subcategory-container__active' : ''}`}>
      <div className={`subcategory-header ${enTitle === '' ? 'hide' : ''}`} onClick={handler}>
        <span>{`${enTitle} (${esTitle})`}</span>
        <img src={arrowIcon} alt="arrow icon" className={isActive ? 'active' : ''} />
      </div>
      {product.map((p, i) => <SubcategoryItem isActive={isActive} product={p} key={i} />)}
    </div>
  );
}

export default MenuSubcategory;