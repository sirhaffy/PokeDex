import React, { Component } from "react";

import PokemonList from "./components/pokemon/PokemonList";
import "./index.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to PokeDex Mini</h1>
        </header>

        <main>
          <PokemonList />
        </main>

        <footer>
          <p>Created by Fredrik Hallén.</p>
        </footer>
      </div>
    );
  }
}
