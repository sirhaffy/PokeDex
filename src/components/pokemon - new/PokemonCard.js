import React, { Component } from "react";
import { ConvertToKg } from "../../util/ConvertToKg";
import { Types } from "../../util/Types";
import { Abilities } from "../../util/Abilities";

class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      activePokemon: {}
    };
  }

  async componentDidMount() {
    fetch(this.props.pokemonData.url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          activePokemon: result /* Gets an Object. */
          //activePokemon: result.results /* <- Gets an Array. */
        });
        console.log(this.state.activePokemon.height + " <--");
      });
  }

  render() {
    return (
      <div className="PokemonCardOuter CardShadow">
        <div className="PokemonCardInner">
          <div className="Center Clearfix">
            <div className="ImgContainer">
              <img alt="" src="" />
            </div>
          </div>

          <h3>
            {this.props.pokemonData.name
              .toLocaleLowerCase()
              .split(" ")
              .map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </h3>
          <p>
            <b>Type:</b>
          </p>
          <p>
            <b>Abilities:</b>
          </p>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
