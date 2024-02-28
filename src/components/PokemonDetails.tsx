import React from 'react';
import { Pokemon } from '../pokemon';

interface PokemonDetailsProps {
  pokemon: Pokemon;
  onClose: () => void;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon, onClose }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{pokemon.name}</h5>
            <button type="button" className="close" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Id: {pokemon.id}</p>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <p>Tipo(s): {pokemon.types?.map(type => type.name).join(', ')}</p>
            <p>Movimientos: {pokemon.moves?.map(move => move.name).join(', ')}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
