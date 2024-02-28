import React from 'react';
import { Pokemon } from '../pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {
  return (
    <li className="pokemon-card" onClick={() => onClick(pokemon)}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>#{pokemon.id}</p>
    </li>
  );
};

export default PokemonCard;
