import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from '../pokemon';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';

interface PokemonPageProps {
  generation: string;
  onGenerationChange: (generation: string) => void;
}

const PokemonPage: React.FC<PokemonPageProps> = ({ generation, onGenerationChange }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{ results: Pokemon[] }>(
          `https://pokeapi.co/api/v2/pokemon?${generation}`
        );
        setPokemons(response.data.results);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar los datos de los Pokémon');
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [generation]);

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

  const handleGenerationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onGenerationChange(event.target.value);
  };

  return (
    <div>
      <div className="row justify-content-center mt-4 mb-3">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <select id="generations" className="form-select fs-5" value={generation} onChange={handleGenerationChange}>
            <option value="offset=0&limit=151">Primera Generación</option>
            <option value="offset=151&limit=100">Segunda Generación</option>
            <option value="offset=251&limit=135">Tercera Generación</option>
            <option value="offset=386&limit=107">Cuarta Generación</option>
            <option value="offset=493&limit=156">Quinta Generación</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-2"></div>
        <div className="col-8 d-flex justify-content-between flex-wrap">
          {loading && <p>Cargando...</p>}
          {error && <p>{error}</p>}
          <PokemonList pokemons={pokemons} onPokemonClick={handlePokemonClick} />
        </div>
        <div className="col-2"></div>
      </div>
      {selectedPokemon && (
        <PokemonDetails pokemon={selectedPokemon} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PokemonPage;
