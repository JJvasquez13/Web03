import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from './pokemon';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{ results: Pokemon[] }>(
          'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
        );
        setPokemons(response.data.results);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar los datos de los Pokémon');
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const handlePokemonClick = async (pokemon: Pokemon) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      setSelectedPokemon(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error al cargar los detalles del Pokémon');
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
     <div className="container-fluid">
      <Navbar /> {/* Aquí incluyes el componente Navbar */}
      <main>
        <div className="row justify-content-center">
          <div className="col-2"></div> {}
          <div className="col-8 d-flex justify-content-between flex-wrap">
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            <PokemonList pokemons={pokemons} onPokemonClick={(pokemon: Pokemon) => handlePokemonClick(pokemon)} />
          </div>
          <div className="col-2"></div> {}
        </div>
        {selectedPokemon && (
          <PokemonDetails pokemon={selectedPokemon} onClose={handleCloseModal} />
        )}
      </main>
    </div>
  );
};

export default App;
