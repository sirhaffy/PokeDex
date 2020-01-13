import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import PokemonHero from "./PokemonHero";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      pokemonList: [],
      pokemonSelected: "Click a pokemon to se more info here."
    };
  }

  async componentDidMount() {
    const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";

    // Get the data from the API.
    fetch(urlPokemon)
      .then(result => result.json())
      .then(result => {
        this.setState({
          // pokemonList: result, /* Gets an Object. */
          pokemonList: result.results /* <- Gets an Array. */
        });
        //console.log(this.state.pokemonData + " <--");
      });
  }

  render() {
    return (
      <main>
        <div className="HeroWrapper">
          <PokemonHero pokemonData={this.state.pokemonList} />
        </div>

        <div>
          <div>
            {this.state.pokemonList ? (
              <div className="PokemonList">
                {this.state.pokemonList.map(pokemon => (
                  <PokemonCard pokemonData={pokemon} />
                ))}
              </div>
            ) : (
              <div className="PokemonList">
                <h1> Loading pokemons...</h1>
              </div>
            )}
          </div>
        </div>

        {/*<button onClick={pokemonLoadMore}>Load more..</button>*/}
      </main>
    );
  }
}

export default Dashboard;
