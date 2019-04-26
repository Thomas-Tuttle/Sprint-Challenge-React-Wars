import React, { Component } from 'react';
import Card from "./components/idCard"; 
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results }, async () => {

          const chars = await Promise.all(this.state.starwarsChars.map(async (character) => {

            let homeworld = await fetch(character.homeworld);
            homeworld = await homeworld.json();
            character.homeworld = homeworld;

            let species = await fetch(character.species);
            species = await species.json();
            character.species = species;

            let films = await Promise.all(character.films.map(async url => {

              let film = await fetch(url);
              film = film.json();
              return film;

            }));

          character.films = films;

            return character;
          }));
          this.setState({
            starwarsChars: chars
          })
        });
       
      })

      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">

<h1 className="Header">REACT WARS</h1>
        <section className="character">
          {this.state.starwarsChars.map((character, info) => (
            <Card character={character} key={info} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
