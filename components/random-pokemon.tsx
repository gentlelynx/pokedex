//random number that will correspond to the fetched pokemon ID
export function RandomPokeID() {
    const RandomID: number = Math.floor(Math.random() * 1025);
    console.log("Random ID = " + RandomID);
    return RandomID;
}

//static fetch of the pokemon object
export async function randomPokemonObject() {
  const fetchedRandomID = RandomPokeID();
  
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchedRandomID}`);
  //parse the response
  const data = await response.json();
  console.log("Fetched pokemon: " + data.id + ". " + data.name)
  
  if (!data) {
    console.log("Fetching failed!");
    return null
  };

  return {
    pokemonID: data.id,
    name: data.name,
    types: data.types,
    health: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    sprites: data.sprites.other["official-artwork"].front_default,
  };
}
