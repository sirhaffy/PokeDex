import React from "react";
import { render } from "react-dom";

import CardSmall from "./CardSmall";
import CardHero from "./CardHero";

export default class Dashboard extends React.Component {

changeCard = (event) => { // If I want to access this in a constructor.
  // 1. Stop the form from submitting.
  event.preventDefault();
  // 2. Get the
}

  render() {
    return (
      
      <React.Fragment>  { /* Makes a temp div and removes it after render. */ }

      <main>

        <div className="HeroWrapper">
          <CardHero />
        </div>

        <div className="PokemonList">
          <CardSmall />
          <CardSmall />
          <CardSmall />
        </div>

      </main>

      </React.Fragment>

    );
  }
}