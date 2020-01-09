import React from "react";
import { render } from "react-dom";

export default class CardSmall extends React.Component {

  constructor(props) { // Runs before the component when component loaded.
    super(props);

    // This binding is necessary to make this work in the callback.
    this.cardClicked = this.cardClicked.bind(this);
  }

  // How to get this to get the data from the clicked card? And the send it to changePokemonCard.
  cardClicked() {

    alert('Change the Pokemon !');
    
      // This is the PokemonChange.
      changePokemon = event => {
        // Stop the form from submitting
        event.preventDefault();
          const selectedPokemon = {
            name: this.xxx,
            url: this.xxx,
            abilities: this.xxx
          };
        this.props.changePokemon(selectedPokemon);
      };

  }

  // Send the selected data to the Hero Card. Need an event?
  this.props.changePokemonCard(cardClicked);

  render() {
    return (
      <div className="PokemonCardOuter CardShadow" onClick={this.cardClicked}>
        <div className="PokemonCardInner">
          <div className="Center Clearfix">
            <div className="ImgContainer">
              <img alt="" src="" />
            </div>
          </div>

          <h3>Pokemon Name</h3>

          <p>
            <b>Abilities:</b> 
          </p>
          <p>
            <b>Types:</b> 
          </p>
        </div>
      </div>
    );
  }
}
