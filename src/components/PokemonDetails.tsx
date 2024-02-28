import React from 'react';
import { Pokemon } from '../pokemon';

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-details">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>#{pokemon.id}</p>
      <ul>
        <li>Altura: {pokemon.height}</li>
        <li>Peso: {pokemon.weight}</li>
      </ul>
      <h3>Tipo</h3>
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.name}>{type.name}</li>
        ))}
      </ul>
      <h3>Movimientos</h3>
      <ul>
        {pokemon.moves.map((move) => (
          <li key={move.name}>{move.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;
