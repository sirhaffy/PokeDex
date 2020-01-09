import React from "react";
import { render } from "react-dom";

import CardSmall from "./CardSmall";
import CardHero from "./CardHero";

export default class Dashboard extends React.Component {

  state = { // This is a property.
    url: `https://pokeapi.co/api/v2/pokemon/`,
    pokemon: null, 
    selectedPokemon: null,
    name: "",
    imageUrl: "",
    imageUrlFront: "",
    imageUrlBack: "",
    pokemonIndex: "",
    types: [],
    description: "",
    pokemonHeight: "",
    pokemonWeight: "",
    eggGroup: "",
    abilities: ""
  };

  // This gets data from CardSmall Clicked card to pokemon and prints Changing card !
  createPokemon = selectedPokemon => {

    // 1. Take a copy of the existing state
    const pokemon = { ...this.state.pokemonMultiSelected };
    // 2. Add our new
    pokemon[`selectedPokemon${Date.now()}`] = selectedPokemon;

    this.setState({
      pokemon: pokemon

    console.log("Changing card !");
    });

  };

  /* NEED TO REWRITE THIS to work with FETCH

  async componentDidMount() { // Runs after component is loaded.
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] }); // Get the full array and save it in the pokemon variable. *

  render() {
    return (
      
      <React.Fragment>  { /* Makes a temp div and removes it after render. */ }

        <main>

          {/* This is the HERO section. It should just post ONE card, the selected card if anyone is selected. */}

          <React.Fragment>
              {this.state.pokemonSelected ? (
              <div className="PokemonList">
            <div className="HeroWrapper">

              <CardHero />
              
            </div>
            {this.state.pokemonSelected.map((pokemonSelected)) => (  
                  <PokemonCard
                    key={pokemonSelected.name}
                    name={pokemonSelected.name}
                    url={pokemonSelected.url}
                    image={pokemonSelected.image}
                    image={pokemonSelected.moves}
                  />
                ))}

              </div>

              ) : ( { /* Comment, this is an (IF) : (Else) */ }
              <h1> Loading pokemons...</h1>
              )}

          </React.Fragment>




          {/* This is the CARD section. This should list all the cards and also under this there should be a "load more" button.*/}

          <React.Fragment>
            {this.state.pokemon ? (
            <div className="PokemonList">
              
              <CardSmall changePokemonCard={this.changePokemonCard} /> {/* Send it to next level. */}

              {this.state.pokemon.map((pokemon)) => (  
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  image={pokemon.image}
                  image={pokemon.moves}
                />
              ))}

            </div>

            ) : ( { /* Comment, this is an (IF) : (Else) */ }
            <h1> Loading pokemons...</h1>
            )}

          </React.Fragment>
            
          </div>

        </main>

      </React.Fragment>

    );
  }
}