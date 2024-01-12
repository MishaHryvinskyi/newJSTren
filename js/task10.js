 
const container = document.querySelector(".js-card-container");
const searchForm = document.querySelector(".js-search-form");
 
searchForm.addEventListener("submit", onSearch);
 
function onSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const searchQuery = form.elements.query.value

    fetchPokemonById(searchQuery)
    .then(renderPokemonCart)
    .catch(onFetchError)
    .finally(() => form.reset());
};

function renderPokemonCart(pokemon) {
    const { 
        name, 
        weight, 
        height, 
        sprites: { front_default } 
    } = pokemon;

    const  markup = `<div class="card">
    <div class="card-img-top">
      <img src="${front_default}" alt="${name}">
    </div>
    <div class="card-body">
      <h2 class="card-title">Ім'я: ${name} </h2>
      <p class="card-text">Вага: ${weight}</p>
      <p class="card-text">Ріст: ${height}</p>
    </div>
  </div>`;

  return container.innerHTML = markup;
};

function fetchPokemonById(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    return fetch(url)
        .then(response => {
            return response.json()
        });
};

function onFetchError(error) {
    alert("Дідько!!! Не можу знайти такого покемона!! ☹")
};
