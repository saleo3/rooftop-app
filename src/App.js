import React, { useState, useEffect } from 'react';
import './App.css';
import './components/TopTitle'
import TopTitle from './components/TopTitle';
import MenuOptions from './components/MenuOptions';
import Menu from './components/Menu';
import { checkSubcategories, loadData, getTitle, checkArray } from './helpers';

function App() {
  const [categories, setCategories] = useState([]);
  const [state, setState] = useState({
    currentMenu: 0,
    searchText: '',
    selection: -1
  })

  useEffect(() => {
    loadData(setCategories);
  }, []);

  // Check if array has data first
  const addCallback = checkArray(categories);
  // Get Menu Categories to display
  const menuOptions = addCallback(() => categories.map(category => getTitle(category.translations)[0]));
  // Get subcategories
  const subcategories = addCallback(() => checkSubcategories(categories[state.currentMenu]));

  return (
    <div className="App">
      <TopTitle />
      <MenuOptions options={menuOptions} menu={state.currentMenu} handler={setState} />
      <Menu subcategories={subcategories} searchText={state.searchText} handler={setState} selection={state.selection} />
    </div>
  );
}

export default App;
