import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: "" 
    };

  }

  ///////////////Les Méthodes du components

  //Va chercher le Json du API
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // This is a promises
    .then(users => this.setState({ monsters: users })); // Remplie l'array monsters avec les noms des personnes
  }

  //le arrow function bind automatiquement au constructor
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    //Déconstruire
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={ this.handleChange }
        />
        <CardList 
          monsters={filteredMonsters}
       />
      </div>
    )
  }
}

export default App;
