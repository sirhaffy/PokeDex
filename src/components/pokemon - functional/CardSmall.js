import React from 'react';

function CardSmall(props) { // Functional component

  const pokemonIndex = props.url.split("/")[props.url.split("/").length - 2];

  // URLs for pokemon information.
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
  const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

  const cardClicked = () => { // This should add data to the HERO Card after click on div in CardSmall.
    //setPokemonCatched({catchedPokemon}); 
    alert("cardClicked!");
  };

  //const abilities = pokemonUrl.abilities.map(ability => {return ability.ability.name});
  

  return (
    <div className="PokemonCardOuter CardShadow" onClick={props.cardClicked}>
      <div className="PokemonCardInner">
        <div className="Center Clearfix">
          <div className="ImgContainer">
            <img alt={props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}/>
          </div>
        </div>

        <h3>{props.name
              .toLocaleLowerCase()
              .split(" ")
              .map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
        </h3>

        <p>
          <b>Abilities: </b>
        </p>

        <p>
          <b>Types: </b> 
        </p>
        
      </div>
    </div>
  );
}

export default CardSmall;