import React, { useState, useEffect } from 'react';
import './App.css';
import './components/TopTitle'
import TopTitle from './components/TopTitle';
import MenuOptions from './components/MenuOptions';
import Menu from './components/Menu';
import { checkSubcategories, loadData, getTitle, checkArray } from './helpers';

function App() {
  const [state, setState] = useState([]);
  const [currentMenu, setMenu] = useState(0);
  const [searchText, searchHandler] = useState('');

  useEffect(() => {
    loadData(setState);
  }, []);

  // Check if array has data first
  const addCallback = checkArray(state);
  // Get Menu Categories to display
  const menuOptions = addCallback(() => state.map(category => getTitle(category.translations)[0]));
  // Get subcategories
  const subcategories = addCallback(() => checkSubcategories(state[currentMenu]));

  return (
    <div className="App">
      <TopTitle />
      <MenuOptions options={menuOptions} menu={currentMenu} handler={setMenu} />
      <Menu subcategories={subcategories} searchText={searchText} handler={searchHandler} />
    </div>
  );
}

export default App;
