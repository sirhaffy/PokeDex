import React from "react";
import { render } from "react-dom";

import CardSmall from "./CardSmall";
import CardHero from "./CardHero";

export default class Dashboard extends React.Component {

  state = { // This is a property.
    url: `https://pokeapi.co/api/v2/pokemon/`,
    pokemon: null,
    pokemonSelected: null,
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


  /* NEED TO REWRITE THIS 
  async componentDidMount() { // Runs after component is loaded.
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] }); // Get the full array and save it in the pokemon variable. */
  
  // This gets data from CardSmall Clicked card to pokemon and prints Changing card !
  changePokemonCard = pokemonSelected => {
    console.log("Changing card !");
  };

  render() {
    return (
      
      <React.Fragment>  { /* Makes a temp div and removes it after render. */ }

      <main>

      {/* This is the HERO section. */}
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




        {/* This is the CARD section. */}

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
        image={pokemon.moves}
      />
    ))}
  </div>
) : (
  <h1> Loading pokemons...</h1>
)}
</React.Fragment>