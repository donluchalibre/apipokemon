document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn"); 
    const pokemonContainer = document.getElementById("pokemonContainer");


    async function buscarPokemon() { 
        const pokemonName = searchInput.value.trim().toLowerCase();
        if (pokemonName) {
            try {
                const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
                const response = await fetch(apiUrl); 
                const data = await response.json();
                mostrarPokemon(data);
            } catch (error) {
                console.error("Error al buscar el Pokémon:", error);
                alert('No se pudo encontrar el Pokémon');
            }
        } else {
            alert('Ingrese el nombre de un Pokémon');
        }
    }

    function mostrarPokemon(pokemon) {
        const pokemonCard = document.createElement("div"); 
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.innerHTML = ` 
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        `;
        pokemonContainer.innerHTML = '';
        pokemonContainer.appendChild(pokemonCard);
    }
    searchBtn.addEventListener("click", buscarPokemon); 
});
