import React from "react";
import { render } from "react-dom";

import CardSmall from "./CardSmall";
import CardHero from "./CardHero";
 
export default class Dashboard extends React.Component {

  constructor(props) { // Runs before the component is loaded.
    super(props);

    this.state = {
      url: `https://pokeapi.co/api/v2/pokemon/`,
      pokemon: null,
      error: null,
      isLoaded: false,
      results: []
    };

    // This binding is necessary to make this work in the callback.
    this.cardClicked = this.cardClicked.bind(this);
  };

  componentDidMount() { // Runs after component had loaded.

    fetch('url')
      .then(blob => blob.json())
      .then(data => {
        this.setState({ 
          pokemon: data["results"] 
        });

      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  };


  // Select new Hero card. Set an if else when done, to set default.
  cardClicked = event => {
    event.preventDefault(); // Stop the form from submitting.
    //this.setState({pokemonHeroCard: cardClicked}); // This should add data to the HERO Card.
    alert("cardClicked !")
  };

  render() {

        <main>

            const { error, isLoaded, results } = this.state;
              if (error) {
                return <div>Error: {error.message}</div>;
              } else if (!isLoaded) {
                return <div>Loading...</div>;
              } else {
                return (
                  <ul>
                    {results.map(item => (
                      <li key={item.name}>
                        {item.name} {item.price}
                      </li>
                    ))}
                  </ul>

                  <div className="PokemonList">
                    <div className="HeroWrapper">
                      <CardHero />
                    </div>
                  </div>

                  <div className="PokemonList">
                    <CardSmall changePokemonCard={this.changePokemonCard} cardClicked={this.cardClicked} /> {/* Send it to next level. */}
                  </div>
                );

        </main>

  }
}