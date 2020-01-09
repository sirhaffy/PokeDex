import React, { Component } from 'react';
import CardSmall from "./CardSmall";
import CardHero from "./CardHero";

export default class Dashboard extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemons: [],
    };

    // This binding is necessary to make this work in the callback.
    this.cardClicked = this.cardClicked.bind(this);
  };

  componentDidMount() {

    // URLs for pokemon information.
    const pokemonApi = `https://pokeapi.co/api/v2/pokemon/`;

    // Get the Index out.
    const pokemonIndex = pokemonApi.split("/")[pokemonApi.split("/").length - 2];

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    this.setState({ 
      isLoading: true 
    })

    fetch(pokemonApi)
      .then(res => res.json())
      .then(data => 
        this.setState({
          pokemons: data.results,
          isLoading: false,
      }));

    
  };

  // Select new Hero card. Set an if else when done, to set default.
  cardClicked = () => {
    // this.setState({pokemonHeroCard: cardClicked}); // This should add data to the HERO Card.
    alert('cardClicked!')
  };

  render() {
    const pokemons = this.state.pokemons;
    const isLoading = this.state.isLoading;
    
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <main>

        <div className="HeroWrapper">
            <CardHero 
              key={pokemons.name}
              data={pokemons}
            />
        </div>

        <div>
          <div className="PokemonList">
              {pokemons.map(pokemon =>
                <CardSmall
                  key={pokemon.name}
                  data={pokemon}
                  changePokemonCard={this.changePokemonCard}
                  cardClicked={this.cardClicked}
                />
              )}
          </div>
        </div>

      </main>
    );
  }
}