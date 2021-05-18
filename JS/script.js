//Cargar el html primero
 document.addEventListener("DOMContentLoaded", () => {
   const random = getRandomInt(1, 320)
    fetchApi(random)
 })

 //Crear un numero al azar del 1 al 150
 const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
 
 //Pedirle los datos a la API
 const fetchApi = async (id) => {
try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json()

    const pokemon = {
        img: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        vida: data.stats[0].base_stat,
        tipo: data.types[0].type.name,
        experiencia: data.base_experience,
        ataque: data.stats[1].base_stat,
        especial: data.stats[3].base_stat,
        defensa: data.stats[2].base_stat

    }
    console.log(data)
//Una vez que tenemos la informacion se pinta nuestra tarjeta con la data
    pintarCard(pokemon)
} catch (error) {
    console.log(error)
}
 }
//Pintamos la card aqui para no tener todo en el Try Catch
 const pintarCard = (pokemon) =>{
// console.log(pokemon);
  const main = document.querySelector(".flex");
  const template = document.getElementById("template-card").content;
//   const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();

  //Modificar la imagen
  template.querySelector(".card-body-img").setAttribute("src", pokemon.img);
  template.querySelector(".card-body-title").innerHTML = ` ${pokemon.nombre}
  <span>hp: ${pokemon.vida}</span>`
  template.querySelector(".card-body-text").innerHTML = `Type: ${pokemon.tipo}`;
  template.querySelector(".card-body-text_").textContent = pokemon.experiencia + " Exp"
  template.querySelectorAll(".card-footer-social h3")[0].textContent = pokemon.ataque;
  template.querySelectorAll(".card-footer-social h3")[1].textContent = pokemon.especial;
  template.querySelectorAll(".card-footer-social h3")[2].textContent = pokemon.defensa;


  fragment.appendChild(template)
  main.appendChild(fragment)
 }