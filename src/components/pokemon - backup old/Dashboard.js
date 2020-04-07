import React, { Component }  from "react";
import { render } from "react-dom";
import axios from "axios";

import PokemonCard from "./PokemonCard";
import PokemonHero from "./PokemonHero";

export default class Dashboard extends Component {
  state = {
    url: `https://pokeapi.co/api/v2/pokemon/`,
    pokemon: null
  };

  // Fetch data from server.
  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] }); // Get the full array and save it in the pokemon variable.
  }

  render() {
    return (
      <main>
        <div className="HeroWrapper">
          <PokemonHero />
        </div>

        <div>
          <React.Fragment>
            {this.state.pokemon ? ( // (IF) : (Else)
              <div className="PokemonList">
                {this.state.pokemon.map((
                  pokemon //map allows us to take out a single object from an array.
                ) => (
                  <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    image={pokemon.image}
                  />
                ))}
              </div>
            ) : (
              <h1> Loading pokemons...</h1>
            )}
          </React.Fragment>
        </div>

        <button>Load more..</button>
      </main>
    );
  }
}
