import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from './pokemon';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

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

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="container-fluid">
      <header className="row mt-4">
        <div className="col-12 text-center">
          <h1>Pokédex</h1>
        </div>
      </header>
      <main>
        <div className="row justify-content-center">
          <div className="col-2"></div> {/* Espacio a la izquierda */}
          <div className="col-8 d-flex justify-content-between flex-wrap">
            <PokemonList pokemons={pokemons} onPokemonClick={handlePokemonClick} />
          </div>
          <div className="col-2"></div> {/* Espacio a la derecha */}
        </div>
        {selectedPokemon && (
          <PokemonDetails pokemon={selectedPokemon} onClose={handleCloseModal} />
        )}
      </main>
    </div>
  );
};

export default App;
