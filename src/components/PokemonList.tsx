import React from 'react';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../pokemon';

interface PokemonListProps {
  pokemons: Pokemon[];
  onPokemonClick: (pokemon: Pokemon) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onPokemonClick }) => {
  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} onClick={onPokemonClick} />
      ))}
    </ul>
  );
};

export default PokemonList;
