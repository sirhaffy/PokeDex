import React, { useState, useEffect } from "react";
import CardSmall from "./CardSmall";
import CardHero from "./CardHero";

function Dashboard() {

  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [pageNumber, setPageNumber] = useState(10);

  const url = "https://pokeapi.co/api/v2/pokemon/3";
  //const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";

/*
  const handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    setActivePage({activePage: pageNumber});
  }
  

   // Get the API data.
   useEffect( () => {
    async function fetchData() {
      const res = await fetch(url);
      console.log(res.data + " <--");
      setPokemon({ pokemon: res.data });
    }
    fetchData();
  }, []);
*/
  

  useEffect( () => {
    async function fetchData() {
      fetch(url)
        .then((response) => { 
          return response.json();
        })
        .then((myJson) => {
          console.log(myJson);
        })
        .then(() => {
          setPokemon({ pokemon: response.json() });
        })
      ;
    }
    fetchData();
  }, []);


  console.log(pokemon + " <-- This is the console.log");

  return (

    <main>
      <div className="HeroWrapper">
      <CardHero  /> {/*// Show the selected pokemon, if no selection hide or something.*/}
      </div>

      <div>
        <div className="PokemonList">
          {pokedex && pokedex.map(pokemonTransfer => ( // List the pokemons from the API.
            <CardSmall 
              key={pokemonTransfer.name} 
              name={pokemonTransfer.name} 
              url={pokemonTransfer.url} 
            />
          ))}
        </div>
      </div>
    
    <button>Load more..</button>
    </main>
  );
}

export default Dashboard;