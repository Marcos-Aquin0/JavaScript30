
async function buscarPokemon(event){
    let pokemon = document.querySelector('.input_search').value.trim();
    event.preventDefault();
    
    try{
        let pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
        let pokeJson = await pokeApi.json();
        let imgPokemon = document.querySelector('.pokemon_image');
        let namePokemon = document.querySelector('.pokemon_name');
        let numberPokemon = document.querySelector('.pokemon_number');

        if(pokeApi.status === 200){
            imgPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeJson.id}.gif`;
            numberPokemon.textContent = pokeJson.id;
            namePokemon.textContent = pokeJson.name;
        }

    }
    catch(error){
        console.error("Erro ao buscar Pokémon:", error);
    }
}

function verificaForm(){
    let form = document.querySelector('.form');
    
    if(form){
        form.addEventListener('submit', buscarPokemon);
    }

}

verificaForm();

