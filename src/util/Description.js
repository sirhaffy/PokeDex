export function Description(incoming) {
   this.state.pokemonData.data.flavor_text_entries.some(flavor => {
     if (flavor.language.name === "en") {
       this.state.pokemonDescription = flavor.flavor_text;
       return;
     }
   });
 }

 //this.state.pokemonData.data.flavor_text_entries