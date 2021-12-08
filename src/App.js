import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import toonSound from './sounds/button-11.wav';
import oopsSound from './sounds/button-5.wav';

const CARDS_PER_LEVEL = 8;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBetScore] = useState(0);

  useEffect(() => {
    loadCard(); // fetch API
  },[]); // this hook runs once right after initial render
  
  useEffect(() => {
    if((selectedPokemon.length === pokemons.length) && (pokemons.length !== 0)){
      levelUp();
    }
  },[selectedPokemon]);

  const shuffleCards = (cards) => {
    return [...cards].sort(() => Math.random() - 0.5)
  }

  const loadCard = async () =>{
    setPokemons(shuffleCards(await fetchPokemons(CARDS_PER_LEVEL)));
  }

  const fetchPokemons = async (quantity) => {
    // console.log(`fetch  ${quantity} new data`);
    const pokemons = [];
    const j = Math.round((Math.random() + .5) * 100);
    for (let i = 1; i <= quantity; i++) {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i+j}`;
      const response = await fetch(pokemonUrl)
      const pokemon = await response.json()
      const id = pokemon.id
      const name = pokemon.name.toUpperCase();
      const image = pokemon.sprites.front_default
      pokemons.push({ id, name, image })
    }
    return pokemons
  }

  const handleCardClick = (e) => {
    const IDCard = e.target.parentElement.id;
    const audio = document.querySelector('audio');

    if(selectedPokemon.includes(IDCard)) {
      audio.src = oopsSound;
      audio.play();
      reset();
    }
    else{
      audio.src = toonSound;
      audio.play();
      setSelectedPokemon((prevselectedPokemon) => [...prevselectedPokemon, IDCard]);
      const currentScore = score;
      if(currentScore >= bestScore){
        setBetScore((currentValue) => currentValue + 1);
      }
      setScore((currentValue) => currentValue + 1);
      setPokemons(shuffleCards(pokemons));
      
    }
  }

  const reset = () => {
    setScore(0);
    setSelectedPokemon([]);
    setPokemons([]);
    loadCard();
  }

  const levelUp = () => { // load new collection of cards after get max score per level
    console.log('level up');
    setSelectedPokemon([]);
    loadCard();
  }


  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Main pokemons={pokemons} handleCardClick={handleCardClick}/>
      <audio></audio>
    </>
  );
}

export default App;
