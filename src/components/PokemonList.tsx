import React from 'react';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../pokemon';

interface PokemonListProps {
  pokemons: Pokemon[];
  onPokemonClick: (pokemon: Pokemon) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onPokemonClick }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonCard pokemon={pokemon} onClick={onPokemonClick} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
