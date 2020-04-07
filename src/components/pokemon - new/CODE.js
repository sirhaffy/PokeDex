{`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}

<div className="PokemonCardOuter CardShadow" onClick={props.cardClicked}></div>
  
  
  
  const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";

    // Get the data from the API.
    fetch(urlPokemon)
      .then(result => result.json())
      .then(result => {
        this.setState({
          // pokemonList: result, /* Gets an Object. */
          pokemon: result.results /* <- Gets an Array. */
        });
        //console.log(this.state.pokemonData + " <--");
      });
  
  
  
  
  const url = `https://pokeapi.co/api/v2/pokemon/1/`;

  // Get the Index out.
  const pokemonIndex = url.split("/")[url.split("/").length - 2];

  // URLs for pokemon information.
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
  const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

  // Get the info.
  const pokemonRes = await axios.get(pokemonUrl);

  const name = pokemonRes.data.name;

  // Image front and back.
  const imageUrlFront = pokemonRes.data.sprites.front_default;
  const imageUrlBack = pokemonRes.data.sprites.back_default;

  // Convert to m.
  const height = Math.round(pokemonRes.data.height / 10);

  // Convert to kg.
  const weight = Math.round(pokemonRes.data.weight / 10);

  // Types
  const types = pokemonRes.data.types
    .map(type => {
      return type.type.name
        .toLowerCase()
        .split("-")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    })
    .join(", ");

  // Abilities
  const abilities = pokemonRes.data.abilities
    .map(ability => {
      return ability.ability.name
        .toLowerCase()
        .split("-")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    })
    .join(", ");

  // Get desciption, english  only.
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