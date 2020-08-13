import React, { useState, useEffect } from 'react';
import './App.css';
import './components/TopTitle'
import TopTitle from './components/TopTitle';
import MenuOptions from './components/MenuOptions';
import Menu from './components/Menu';

function App() {
  const [state, setState] =  useState([]);
  const [currentMenu, setMenu ] = useState(0);

  useEffect(() => {
    async function loadData() {
      const api = await fetch('https://api.adminsite.appsinti.com/menu/product');
      const data = await api.json();
      setState(data);
    }

    loadData();
  });

  function checkSubcategories(menu) {
    const custom = [{
      translations: { "en":{"title":""},"es":{"title":""} },
      products: menu.products
    }]

    return menu.subcategories.length === 0
      ? custom
      : menu.subcategories
  }

  const menuOptions = state.length > 0
    ? state.map(category => category.translations.en.title)
    : state;
  const category = state.length > 0
    ? checkSubcategories(state[currentMenu])
    : [];

  return (
    <div className="App">
      <TopTitle />
      <MenuOptions options={menuOptions} menu={currentMenu} handler={setMenu} />
      <Menu subcategories={category} />
    </div>
  );
}

export default App;
