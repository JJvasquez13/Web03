import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from './pokemon';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

interface AppState {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get<{ results: Pokemon[] }>(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
      );
      setPokemons(response.data.results);
    };

    fetchPokemons();
  }, []);

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="App">
      <header>
        <h1>Pokédex</h1>
      </header>
      <main>
        <PokemonList pokemons={pokemons} onPokemonClick={handlePokemonClick} />
        {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
      </main>
    </div>
  );
};

export default App;
