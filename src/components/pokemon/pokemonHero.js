import React, { Component } from "react";
import axios from "axios";
import { Abilities } from "../../util/Abilities";
import { Types } from "../../util/Types";

export default class PokemonHero extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    types: [],
    description: "",
    pokemonHeight: "",
    pokemonWeight: "",
    eggGroup: "",
    abilities: ""
  };

  async componentDidMount() {
    // Should show where I am at.
    const url = this.props.url;

    // Get the Index out.
    const pokemonIndex = url.split("/")[url.split("/").length - 2];

    // URLs for pokemon information.
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    // Get the info.
    const pokemonRes = await axios.get(url);

    const name = pokemonRes.data.name;

    // Image front and back.
    const imageUrlFront = pokemonRes.data.sprites.front_default;
    const imageUrlBack = pokemonRes.data.sprites.back_default;

    // Convert to m.
    const height = Math.round(pokemonRes.data.height / 10);

    // Convert to kg.
    const weight = Math.round(pokemonRes.data.weight / 10);

    // Types
    const types = Types(pokemonRes.data.types);

    const abilities = Abilities(pokemonRes.data.abilities);

    // Get pokemon english desciption only.
    await axios.get(pokemonSpeciesUrl).then(res => {
      let description = "";
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === "en") {
          description = flavor.flavor_text;
          return;
        }
      });

      const eggGroups = res.data["egg_groups"].map(group => {
        return group.name
          .toLowerCase()
          .split(" ")
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
      });

      this.setState({
        name: name,
        imageUrlFront: imageUrlFront,
        imageUrlBack: imageUrlBack,
        types: types,
        height: height,
        weight: weight,
        eggGroups: eggGroups,
        abilities: abilities,
        description: description
      });
    });
  }

  render() {
    return (
      <div className="PokemonHeroOuter CardShadow" onClick={this.props.onClose}>
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
