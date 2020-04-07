import React, { Component } from "react";
import axios from "axios";
import { Abilities } from "../../util/Abilities";
import { Types } from "../../util/Types";

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    abilities: "",
    eggGroups: ""
  };

  async componentDidMount() {
    const name = this.props.name;
    const url = this.props.url;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const pokemonRes = await axios.get(url);
    const imageUrl = pokemonRes.data.sprites.front_default;
    const abilities = Abilities(pokemonRes.data.abilities);
    const types = Types(pokemonRes.data.types);

    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex,
      abilities: abilities,
      types: types
    });
  }

  render() {
    return (
      <div
        className="PokemonCardOuter CardShadow"
        onClick={this.props.openModal}
      >
        <div className="PokemonCardInner">
          <div className="Center Clearfix">
            <div className="ImgContainer">
              <img alt="" src={this.state.imageUrl} />
            </div>
          </div>

          <h3>
            {this.state.name // Fix first letter to be caps.
              .toLocaleLowerCase()
              .split(" ")
              .map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </h3>

          <p>
            <b>Abilities:</b> {this.state.abilities}
          </p>
          <p>
            <b>Types:</b> {this.state.types}
          </p>
        </div>
      </div>
    );
  }
}
