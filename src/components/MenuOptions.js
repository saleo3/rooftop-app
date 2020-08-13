import React from 'react';
import './MenuOptions.scss';

function MenuOptions({ options, menu, handler }) {
  return (
    <nav className="menuContainer">
      {options.map(
        (option, i) => <a href="#" key={i} className={i === menu ? 'active' : ''} onClick={() => handler(i)}>{option}</a>
      )}
    </nav>
  );
}

export default MenuOptions;