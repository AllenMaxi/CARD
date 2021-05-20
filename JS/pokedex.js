const pokeDex = document.getElementById("poke_container");
const pokeNumber = 200;

document.addEventListener("DOMContentLoaded", () => {
    fetchPokemons()
})

const colors = {
    fire: "#fddfdf",
    grass: "#defde0",
    electric: "#fcf7de",
    water: "#def3fd",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poision: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#fsfsfs",
    fighting: "#e6e0d4",
    normal: "#fsfsfs"

}
const main_types = Object.keys(colors);
console.log(main_types)
//Llamar a los 250 pokemon
const fetchPokemons = async() =>{
    for (let i = 1; i < pokeNumber; i++) {
        await getPokemon(i)
        
    }
}

const getPokemon = async id => {
const url = `https://pokeapi.co/api/v2/pokemon/${id}`

const res = await fetch(url);
const pokemon = await res.json();

createPokemon(pokemon)
}

const createPokemon = (pokemon) =>{
const pokemonElement = document.createElement("div");
pokemonElement.classList.add("pokemon");

const poke_types = pokemon.types.map(el => el.type.name);
const types = main_types.find( type => 
    poke_types.indexOf(type) > -1);

const color = colors[types];

pokemonElement.style.backgroundColor = color;

const pokeInnerHTML = `
<div class="img-container"> <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"> 
 </div> 
 <div class="info"> 
   <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
   <h3 class="name"> ${pokemon.name} </h3>
   <small class="type"> Type: <span> ${types} </span> </small>
 </div>
`;

pokemonElement.innerHTML = pokeInnerHTML

pokeDex.appendChild(pokemonElement);
}