import React from 'react';
import './MenuOptions.scss';

function MenuOptions({ options, menu, handlers: [setMenu, searchHandler] }) {
  return (
    <nav className="menuContainer">
      {options.map(
        (option, i) => <a href="#" key={i} className={i === menu ? 'active' : ''} onClick={() => { setMenu(i); searchHandler('') }}>{option}</a>
      )}
    </nav>
  );
}

export default MenuOptions;