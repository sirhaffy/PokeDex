import React from "react";
import { render } from "react-dom";

function handleClick(event) {
  event.preventDefault();
  console.log('The link was clicked.');
}

export default class CardHero extends React.Component {

  

  render() {
    return (
      <div className="PokemonHeroOuter CardShadow" onClick={handleClick}>
        <div className="PokemonHeroInner">
          <div className="CenterHero Clearfix">
            <div className="ImgContainerHero">
              <img alt="" src="" />
            </div>
            <div className="ImgContainerHero">
              <img alt="" src="" />
            </div>
          </div>

          <h1>Pokemon name</h1>

          <div className="PokemonInfo">
            <p>
              <b>Height:</b>  m
            </p>
            <p>
              <b>Weight:</b>  kg
            </p>
            <p>
              <b>Type:</b> 
            </p>
            <p>
              <b>Abilities:</b> 
            </p>
            <p>
              <b>EggGroups:</b> 
            </p>
            <p>
              <b>Description:</b> 
            </p>
          </div>
        </div>
      </div>
    );
  }
}
