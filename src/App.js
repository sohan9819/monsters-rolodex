import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // if using a arrow function do not need to bind the function
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // filterState(wordToMatch , monsters ){
  //   return monsters.filter(monster =>{
  //     const regex = new RegExp(wordToMatch , 'gi')
  //     return monster.name.match(regex)
  //   } )
  // }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    let { monsters, searchField } = this.state;

    // console.log(monsters, searchField);

    let filteredMonsters =
      searchField === ''
        ? this.state.monsters
        : monsters.filter((monster) => {
            return monster.name
              .toLowerCase()
              .includes(searchField.toLowerCase());
          });

    return (
      <div className="App">
        <h1>Monster Roladex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
