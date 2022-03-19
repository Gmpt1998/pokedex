const pokeCard = document.getElementById("pokeCard");
const pokeName = document.getElementById("pokeName");
const pokeImg = document.getElementById("pokeImg");
const pokeImgContainer = document.getElementById("pokeImgContainer");
const pokeId = document.getElementById("pokeId");
const pokeTypes = document.getElementById("pokeTypes");
const pokeStats = document.getElementById("pokeStats");
const pokeMoves = document.getElementById("pokeMoves");

const typeColors = {
    electric: '#eed535',
    normal: '#a4acaf',
    fire: '#fd7d24',
    water: '#4592c4',
    ice: '#51c4e7',
    rock: '#a38c21',
    flying: '#7AE7C7',
    grass: '#9bcc50',
    psychic: '#f366b9',
    ghost: '#7b62a3',
    bug: '#729f3f',
    poison: '#b97fc9',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#9eb7b8',
    fighting: '#d56723',
    fairy: '#fb8aec',
    default: '#000',
}

const Search = event => {
    event.preventDefault();
    const { value } = event.target.pokeName;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(res => PokemonData(res))
        .catch(error => NotFound())
}
const NotFound = () => {
    pokeName.textContent = "No Encontrado";
    pokeImg.setAttribute("src", "./images/pika.png");
    pokeImg.style.background = "#fff"
    pokeTypes.innerHTML = "";
    pokeStats.innerHTML = "";
    pokeMoves.innerHTML = "";
    pokeId.textContent = "";
    pokeStats.style.border = "none";
    basedisplay.style.background = "#000";
    basedisplay.style.border = "#000 solid 5px";
    pokeMoves.style.border = "none";
}

const PokemonData = data => {
    const sprite = data.sprites.front_default;
    const {stats, types, moves} = data;
    pokeName.textContent =` #${data.id} - ${data.name}` ;
    pokeImg.setAttribute('src', sprite);
    BgColor(types);
    pokemonTypes(types);
    pokemonStats(stats);
    pokemonMoves(moves);
}

const BgColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background =  `radial-gradient(${colorTwo} 0%, ${colorOne} 100%)`;
}

const pokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const TextItem = document.createElement("div");
        TextItem.style.background = typeColors[type.type.name];
        TextItem.textContent = type.type.name;
        pokeTypes.appendChild(TextItem);
    });
}
const pokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statContainer = document.createElement("div");
        const statName = document.createElement("div");
        const statAmmount = document.createElement("div");
        statName.textContent = stat.stat.name;
        statAmmount.textContent = stat.base_stat;
        statContainer.appendChild(statName);
        statContainer.appendChild(statAmmount);
        pokeStats.appendChild(statContainer);
        pokeStats.style.border = "2px solid #a4a4a4";
        pokeMoves.style.border = "2px solid #a4a4a4";
        basedisplay.style.background = "#fff"
        basedisplay.style.border = "#a7a7a7 solid 5px"
    })
}
const pokemonMoves = moves => {
    pokeMoves.innerHTML = '';
    moves.forEach(move => {
        const MoveItem = document.createElement("div");
        MoveItem.textContent = move.move.name;
        pokeMoves.appendChild(MoveItem);
    })
}

var TopDisplay1 = document.getElementById("displayoff2");
    BottomDisplay1 = document.getElementById("displayoff1");
    TopDisplay2 = document.getElementById("top-display-frame");
    BottomDisplay2 = document.getElementById("base-display-frame");
    BtnOnOff = document.getElementById("btnonoff");
    contador = 0;

function cambio (){
    if(contador==0){
        TopDisplay1.classList.add("on");
        TopDisplay2.classList.add("off");
        BottomDisplay1.classList.add("on");
        BottomDisplay2.classList.add("off");
        BtnOnOff.classList.add("btncolor");
        contador=1;
    }
    else{TopDisplay1.classList.remove("on");
         TopDisplay2.classList.remove("off");
         BottomDisplay1.classList.remove("on");
         BottomDisplay2.classList.remove("off");
         BtnOnOff.classList.remove("btncolor");
        contador=0;
    }
}
btnonoff.addEventListener("click", cambio, true) 

