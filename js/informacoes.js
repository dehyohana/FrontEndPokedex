var PokeSelectedId = sessionStorage.getItem('pokemon')
var url = "http://localhost:8080/pokemons/" + PokeSelectedId
var response

async function getContent() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setaDados(data)
    } catch (error) {
      console.log(error);
    }
  }
getContent();

function poke_id(pokemon) {
  return pokemon["id"];
}
function poke_name(pokemon) {
  return pokemon["pokemon_name"];
}
function poke_type1(pokemon) {
  return pokemon["type1"];
}
function poke_type2(pokemon) {
  return pokemon["type2"];
}
function poke_description(pokemon) {
  return pokemon["description"];
}
function poke_img(pokemon) {
  return pokemon["img_url"];
}

function setaDados(pokemons) {
    var id = poke_id(pokemons);
    var name = poke_name(pokemons);
    var tipo1 = poke_type1(pokemons);
    var tipo2 = poke_type2(pokemons);
    var img_url = poke_img(pokemons);
    var description = poke_description(pokemons)

      numeroPokemon.textContent = "#" + id;
      nomePokemon.textContent = name;
      tipoPokemon.textContent = tipo1 + " " + tipo2;
      var caminho = img_url;
      var img = document.querySelector("#img");
      img.setAttribute("src", caminho);
      biografia.textContent = description;
      const tipoDoPokemonCard = "tipo-" + tipo1;
      const cartaoPokemon = document.getElementById("cartao-aberto");
      cartaoPokemon.classList.add(tipoDoPokemonCard);
  }

function getValue() {
  const val = document.querySelector('input').value;
  console.log(val);
}

document.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        document.getElementById("btFechar").click();
    }
});
