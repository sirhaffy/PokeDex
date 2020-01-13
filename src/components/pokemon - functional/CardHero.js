import React from 'react';

function CardHero (props) { // Functional component

    return (
      <div className="PokemonHeroOuter CardShadow">
        <div className="PokemonHeroInner">
          <div className="CenterHero Clearfix">
            <div className="ImgContainerHero">
              <img alt="" src="" />
            </div>
            <div className="ImgContainerHero">
              <img alt="" src="" />
            </div>
          </div>

          <h1></h1>

          <div className="PokemonInfo">
            <p>
              <b>Height:</b>  m
            </p>
            <p>
              <b>Weight:</b>  kg
            </p>
            <p>
              <b>Type:  </b> 
            </p>
            <p>
              <b>Abilities: </b> 
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

export default CardHero;