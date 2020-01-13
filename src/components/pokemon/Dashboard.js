import React, { Component } from "react";
//import axios from "axios";
import PokemonCard from "./pokemonCard";
import PokemonHero from "./pokemonHero";

export default class PokemonList extends Component {
  state = {
    pokemon: [],
    selectedPokemon: null
  };

  handleClick(evt, url) {
    evt.preventDefault();
    this.setState({ selectedPokemon: null }, () => {
      this.setState({ selectedPokemon: url });
    });
    console.log(url);
  }

  // Fetch data from server.
  async componentDidMount() {
    const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";

    fetch(urlPokemon)
      .then(result => result.json())
      .then(result => {
        this.setState({
          // pokemonList: result, /* Gets an Object. */
          pokemon: result.results /* <- Gets an Array. */
        });
      });
  }

  render() {
    return (
      <div className="PokemonMain">
        {this.state.selectedPokemon ? ( // (IF) : (Else)
          <div className="HeroWrapper">
            <PokemonHero url={this.state.selectedPokemon} />
          </div>
        ) : (
          <h3> Click on a green card to show.</h3>
        )}

        <div>
          <React.Fragment>
            {this.state.pokemon ? (
              <div className="PokemonList">
                {this.state.pokemon.map(pokemon => (
                  <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    handleEvent={evt => this.handleClick(evt, pokemon.url)}
                  />
                ))}
              </div>
            ) : (
              <h1> Loading pokemons...</h1>
            )}
          </React.Fragment>
        </div>
      </div>
    );
  }
}
