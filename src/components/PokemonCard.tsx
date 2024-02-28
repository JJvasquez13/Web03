import React from 'react';
import { Pokemon } from '../pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {
  const imageUrl = `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name.toLowerCase()}.png`;

  return (
    <div className="pokemon-card bg-light rounded p-3 text-center shadow mb-4" style={{ maxWidth: '400px' }} onClick={() => onClick(pokemon)}>
      <img src={imageUrl} alt={pokemon.name} className="img-fluid mb-2" style={{ maxHeight: '200px' }} />
      <h5 className="mb-0" style={{ fontSize: '18px' }}>{pokemon.name}</h5>
      <p className="text-muted"># {pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;
