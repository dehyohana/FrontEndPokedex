const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".cartao-pokemon");

var url = "http://localhost:8080/pokemons/size=6/page=0"
var pagina = 0; 

async function getContent() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setaDados(data);
  } catch (error) {
    console.log(error);
  }
}
getContent();


function poke_id(pokemon, i) {
  return pokemon[i]["id"];
}
function poke_name(pokemon, i) {
  return pokemon[i]["pokemon_name"];
}
function poke_type1(pokemon, i) {
  return pokemon[i]["type1"];
}
function poke_type2(pokemon, i) {
  return pokemon[i]["type2"];
}
function poke_height(pokemon, i) {
  return pokemon[i]["height"];
}
function poke_weight(pokemon, i) {
  return pokemon[i]["weight"];
}
function poke_ability(pokemon, i) {
  return pokemon[i]["ability"];
}
function poke_description(pokemon, i) {
  return pokemon[i]["description"];
}
function poke_img(pokemon, i) {
  return pokemon[i]["img_url"];
}


function setaDados(pokemons) {
  for (var i = 0; i < 6; i++) {
    var id = poke_id(pokemons, i);
    var name = poke_name(pokemons, i);
    var tipo1 = poke_type1(pokemons, i);
    var tipo2 = poke_type2(pokemons, i);
    var altura = poke_height(pokemons, i);
    var peso = poke_weight(pokemons, i);
    var ability = poke_ability(pokemons, i);
    var img_url = poke_img(pokemons, i);

    if (i == 0) {
      numeroPokemonA.textContent = "#" + id;
      idPokemonAParaPesquisa = id;
      nomePokemonA.textContent = name;
      nomeMiniaturaA.textContent = name;
      alturaPokemonA.textContent = "Altura: " + altura + " m";
      pesoPokemonA.textContent = "Peso: " + peso + " kg";
      habilidadesPokemonA.textContent = ability;
      tipoPokemonA.textContent = tipo1 + " " + tipo2;
      classeTipoPokemonA = "tipo-" + tipo1;
      const tipoDoPokemonCard = "tipo-" + tipo1;
      const cartaoPokemon = document.getElementById("cartao-a");
      cartaoPokemon.classList.add(tipoDoPokemonCard);
      var caminho = img_url;
      var img = document.querySelector("#imgA");
      img.setAttribute("src", caminho);
      var caminho = img_url;
      var img = document.querySelector("#imgMiniaturaA");
      img.setAttribute("src", caminho);
    }
    if (i == 1) {
      numeroPokemonB.textContent = "#" + id;
      idPokemonBParaPesquisa = id;
      nomePokemonB.textContent = name;
      nomeMiniaturaB.textContent = name;
      alturaPokemonB.textContent = "Altura: " + altura + " m";
      pesoPokemonB.textContent = "Peso: " + peso + " kg";
      habilidadesPokemonB.textContent = ability;
      tipoPokemonB.textContent = tipo1 + " " + tipo2;
      classeTipoPokemonB = "tipo-" + tipo1;
      const tipoDoPokemonCard = "tipo-" + tipo1;
      const cartaoPokemon = document.getElementById("cartao-b");
      cartaoPokemon.classList.add(tipoDoPokemonCard);
      var caminho = img_url;
      var img = document.querySelector("#imgB");
      img.setAttribute("src", caminho);
      var caminho = img_url;
      var img = document.querySelector("#imgMiniaturaB");
      img.setAttribute("src", caminho);
    }
    if (i == 2) {
      numeroPokemonC.textContent = "#" + id;
      idPokemonCParaPesquisa = id;
      nomePokemonC.textContent = name;
      nomeMiniaturaC.textContent = name;
      alturaPokemonC.textContent = "Altura: " + altura + " m";
      pesoPokemonC.textContent = "Peso: " + peso + " kg";
      habilidadesPokemonC.textContent = ability;
      tipoPokemonC.textContent = tipo1 + " " + tipo2;
      classeTipoPokemonC = "tipo-" + tipo1;
      const tipoDoPokemonCard = "tipo-" + tipo1;
      const cartaoPokemon = document.getElementById("cartao-c");
      cartaoPokemon.classList.add(tipoDoPokemonCard);
      var caminho = img_url;
      var img = document.querySelector("#imgC");
      img.setAttribute("src", caminho);
      var caminho = img_url;
      var img = document.querySelector("#imgMiniaturaC");
      img.setAttribute("src", caminho);
    }
    if (i == 3) {
      numeroPokemonD.textContent = "#" + id;
      idPokemonDParaPesquisa = id;
      nomePokemonD.textContent = name;
      nomeMiniaturaD.textContent = name;
      alturaPokemonD.textContent = "Altura: " + altura + " m";
      pesoPokemonD.textContent = "Peso: " + peso + " kg";
      habilidadesPokemonD.textContent = ability;
      tipoPokemonD.textContent = tipo1 + " " + tipo2;
      classeTipoPokemonD = "tipo-" + tipo1;
      const tipoDoPokemonCard = "tipo-" + tipo1;
      const cartaoPokemon = document.getElementById("cartao-d");
      cartaoPokemon.classList.add(tipoDoPokemonCard);
      var caminho = img_url;
      var img = document.querySelector("#imgD");
      img.setAttribute("src", caminho);
      var caminho = img_url;
      var img = document.querySelector("#imgMiniaturaD");
      img.setAttribute("src", caminho);
    }
    if (i == 4) {
      numeroPokemonE.textContent = "#" + id;
      idPokemonEParaPesquisa = id;
      nomePokemonE.textContent = name;
      nomeMiniaturaE.textContent = name;
      alturaPokemonE.textContent = "Altura: " + altura + " m";
      pesoPokemonE.textContent = "Peso: " + peso + " kg";
      habilidadesPokemonE.textContent = ability;
      tipoPokemonE.textContent = tipo1 + " " + tipo2;
      classeTipoPokemonE = "tipo-" + tipo1;
      const tipoDoPokemonCard = "tipo-" + tipo1;
      const cartaoPokemon = document.getElementById("cartao-e");
      cartaoPokemon.classList.add(tipoDoPokemonCard);
      var caminho = img_url;
      var img = document.querySelector("#imgE");
      img.setAttribute("src", caminho);
      var caminho = img_url;
      var img = document.querySelector("#imgMiniaturaE");
      img.setAttribute("src", caminho);
    }
    if (i == 5) {
      numeroPokemonF.textContent = "#" + id;
      idPokemonFParaPesquisa = id;
      nomePokemonF.textContent = name;
      nomeMiniaturaF.textContent = name;
      alturaPokemonF.textContent = "Altura: " + altura + " m";
      pesoPokemonF.textContent = "Peso: " + peso + " kg";
      habilidadesPokemonF.textContent = ability;
      tipoPokemonF.textContent = tipo1 + " " + tipo2;
      classeTipoPokemonF = "tipo-" + tipo1;
      const tipoDoPokemonCard = "tipo-" + tipo1;
      const cartaoPokemon = document.getElementById("cartao-f");
      cartaoPokemon.classList.add(tipoDoPokemonCard);
      var caminho = img_url;
      var img = document.querySelector("#imgF");
      img.setAttribute("src", caminho);
      var caminho = img_url;
      var img = document.querySelector("#imgMiniaturaF");
      img.setAttribute("src", caminho);
    }
  }
}


function nextPage() {
  numeroDePaginas = 17
    if (pagina == (numeroDePaginas - 1)) {
        alert("As páginas acabaram!");
    } else {
        pagina++
        url = "http://localhost:8080/pokemons/size=6/page=" + pagina
        document.getElementById("cartao-a").classList.remove(classeTipoPokemonA)
        document.getElementById("cartao-b").classList.remove(classeTipoPokemonB)
        document.getElementById("cartao-c").classList.remove(classeTipoPokemonC)
        document.getElementById("cartao-d").classList.remove(classeTipoPokemonD)
        document.getElementById("cartao-e").classList.remove(classeTipoPokemonE)
        document.getElementById("cartao-f").classList.remove(classeTipoPokemonF)
        getContent()
    }
}

function previousPage() {
    if (pagina == 0) {
        alert("Não existe página anterior!");
    } else {
        pagina = pagina - 1
        url = "http://localhost:8080/pokemons/size=6/page=" + pagina
        document.getElementById("cartao-a").classList.remove(classeTipoPokemonA)
        document.getElementById("cartao-b").classList.remove(classeTipoPokemonB)
        document.getElementById("cartao-c").classList.remove(classeTipoPokemonC)
        document.getElementById("cartao-d").classList.remove(classeTipoPokemonD)
        document.getElementById("cartao-e").classList.remove(classeTipoPokemonE)
        document.getElementById("cartao-f").classList.remove(classeTipoPokemonF)
        getContent()
    }
}

const botaoNext = document.getElementById("voltar")
botaoNext.addEventListener("click", previousPage)

const botaoPrevious = document.getElementById("proximo")
botaoPrevious.addEventListener("click", nextPage)

listaSelecaoPokemons.forEach((pokemon) => {
  pokemon.addEventListener("click", () => {
    const cartaoPokemomAberto = document.querySelector(".aberto");
    cartaoPokemomAberto.classList.remove("aberto");

    const idPokemonSelecionado = pokemon.attributes.id.value;

    const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;
    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    );
    cartaoPokemonParaAbrir.classList.add("aberto");

    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemonAtivoNaListagem.classList.remove("ativo");

    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList.add("ativo");
  });
});

function armazenaDadosPokemon(valor) {
  console.log(valor);
  sessionStorage.setItem("pokemon", valor);
}
armazenaDadosPokemon()

