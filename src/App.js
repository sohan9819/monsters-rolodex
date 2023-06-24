import React, { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    (async function () {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => setMonsters(users));
    })();
  }, []);

  function filterState(wordToMatch) {
    const regex = new RegExp(wordToMatch, 'gi');
    return monsters.filter((monster) => monster.name.match(regex));
  }

  let filteredMonsters =
    searchField === '' ? monsters : filterState(searchField);

  useEffect(() => {
    console.log(searchField);
  }, [searchField]);

  return (
    <div className='App'>
      <h1>Monster Roladex</h1>
      <SearchBox
        placeholder='search monsters'
        searchField={searchField}
        setSearchField={setSearchField}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
