/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './MenuOptions.scss';

function MenuOptions({ options, menu, handler }) {
  return (
    <nav className="menuContainer">
      {options.map(
        (option, i) => (
          <a
            href="#"
            key={i}
            className={i === menu ? 'active' : ''}
            onClick={() => handler(state => ({ searchText: '', selection: -1, currentMenu: i }))}>
            {option}
          </a>)
      )}
    </nav>
  );
}

export default MenuOptions;