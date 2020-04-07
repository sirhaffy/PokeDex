import React, { Component }  from "react";
import { ConvertToMeter } from "../../util/ConvertToMeter";
import { ConvertToKg } from "../../util/ConvertToKg";
import { Types } from "../../util/Types";
import { Abilities } from "../../util/Abilities";
import { EggGroups } from "../../util/EggGroups";
import { Description } from "../../util/Description";


class PokemonHero extends Component {

  constructor(props) {
    super(props);
      this.state = {
        name: "",
        pokemon: props.pokemon,
        imgUrlFront: "",
        imgUrlBack: "",
        abilities: "",
        types: "",
        description: "",
        pokemonHeight: "",
        pokemonWeight: "",
        eggGroup: "",
      };
  }

  async componentDidMount() {

  }

  render() {
    return (
      <div className="PokemonHeroOuter CardShadow">
        <div className="PokemonHeroInner">
          <div className="CenterHero Clearfix">
            <div className="ImgContainerHero">
              <img alt="" src={this.state.imageUrlFront} />
            </div>
            <div className="ImgContainerHero">
              <img alt="" src={this.state.imageUrlBack} />
            </div>
          </div>

          <h1>
            {this.state.name
              .toLocaleLowerCase()
              .split(" ")
              .map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </h1>

          <div className="PokemonInfo">
            <p>
              <b>Height:</b> {this.state.height} m
            </p>
            <p>
              <b>Weight:</b> {this.state.weight} kg
            </p>
            <p>
              <b>Type:</b> {this.state.types}
            </p>
            <p>
              <b>Abilities:</b> {this.state.abilities}
            </p>
            <p>
              <b>EggGroups:</b> {this.state.eggGroups}{" "}
            </p>
            <p>
              <b>Description:</b> {this.state.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonHero;