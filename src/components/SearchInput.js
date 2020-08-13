import React from 'react';
import './SearchInput.css';
import searchIcon from '../assets/search-icon.svg';

function SearchInput({ text, handler }) {
  return (
    <div className="search-container">
      <input type="text" value={text} onChange={handler} className="search-input"/>
      <div className="search-overlay"><img src={searchIcon} alt="search icon"/></div>
    </div>
  );
}

export default SearchInput;