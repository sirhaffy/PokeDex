import React, { Component } from "react";
import Popup from "reactjs-popup";
//import axios from "axios";
import PokemonCard from "./pokemonCard";
import PokemonHero from "./pokemonHero";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      pokemonObject: {},
      selectedPokemon: null,
      url: "https://pokeapi.co/api/v2/pokemon/",
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    // Fetch data from server.
    const urlPokemon = this.state.url; //Store default url.

    fetch(urlPokemon)
      .then(result => result.json())
      .then(result => {
        this.setState({
          pokemonObject: result /* Gets an Object. */,
          pokemonList: result.results /* <- Gets an Array. */
        });
      });
  }

  clickNext = (event, url) => {
    this.setState({ url: this.state.pokemonObject.next });
    fetch(this.state.pokemonObject.next)
      .then(result => result.json())
      .then(result => {
        console.log({ result });
        this.setState({
          pokemonObject: result /* Gets an Object. */,
          pokemonList: result.results /* <- Gets an Array. */
        });
      });
  };

  clickPrev = (event, url) => {
    this.setState({ url: this.state.pokemonObject.previous });
    fetch(this.state.pokemonObject.previous)
      .then(result => result.json())
      .then(result => {
        console.log({ result });
        this.setState({
          pokemonObject: result /* Gets an Object. */,
          pokemonList: result.results /* <- Gets an Array. */
        });
      });
  };

  openModal(event, url) {
    event.preventDefault();
    this.setState({ selectedPokemon: null }, () => {
      this.setState({ selectedPokemon: url });
      this.setState({ open: false }, () => {
        this.setState({ open: true });
      });
    });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="PokemonMain">
        <div className="HeroWrapper">
          <Popup
            position="center center"
            open={this.state.open}
            closeOnDocument
          >
            <a className="close" onClick={this.closeModal} />
            <PokemonHero
              url={this.state.selectedPokemon}
              onClose={this.closeModal}
            />
          </Popup>
        </div>

        <div>
          <React.Fragment>
            {this.state.pokemonList ? (
              <div className="PokemonList">
                {this.state.pokemonList.map(pokemon => (
                  <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    handleEvent={event => this.handleClick}
                    openModal={event => this.openModal(event, pokemon.url)}
                  />
                ))}
              </div>
            ) : (
              <h1> Loading pokemons...</h1>
            )}
          </React.Fragment>
          <div className="CenterContent">
            <button onClick={this.clickPrev}>Prev</button>
            <button onClick={this.clickNext}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonList;
