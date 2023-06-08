function getPokemonData() {
    // receives the user's input and stores it within the pokemonName variable. Also targetst the pokemon input form located within my HTML document
    var pokemonName = document.getElementById("pokemon-input").value.toLowerCase();
    // add's the user's input to the end of apiUrl
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayPokemonData(data))
        .catch(error => console.log(error));
}

function displayPokemonData(pokemonData) {
    let nameElement = document.getElementById("pokemon-name");
    let imageElement = document.getElementById("pokemon-image");
    let abilitiesElement = document.getElementById("pokemon-abilities");

    nameElement.textContent = pokemonData.name;

    // Display the first image of the Pokémon
    imageElement.src = pokemonData.sprites.front_default;

    // Display the abilities of the Pokémon
    abilitiesElement.innerHTML = "<h3>Abilities:</h3>";
    pokemonData.abilities.forEach(ability => {
        abilitiesElement.innerHTML += "<p>" + ability.ability.name + "</p>";
    });
}

document.getElementById("search-button").addEventListener("click", getPokemonData);
