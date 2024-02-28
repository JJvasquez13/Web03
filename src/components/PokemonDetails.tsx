import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from '../pokemon';

interface PokemonDetailsProps {
  pokemon: Pokemon | null;
  onClose: () => void;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon, onClose }) => {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        if (pokemon) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data = response.data;

          const pokemonData: Pokemon = {
            id: data.id,
            name: data.name,
            sprites: {
              front_default: data.sprites.front_default,
            },
            height: data.height,
            weight: data.weight,
            types: data.types.map((type: any) => ({ name: type.type.name })),
            moves: data.moves.map((move: any) => ({ name: move.move.name })),
          };

          setPokemonData(pokemonData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, [pokemon]);

  const getTypes = () => {
    return pokemonData ? pokemonData.types.map((type) => type.name).join(', ') : 'Desconocido';
  };

  const getMoves = () => {
    return pokemonData ? pokemonData.moves.map((move) => move.name).join(', ') : 'Desconocido';
  };

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
      {pokemonData && (
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{pokemon?.name}</h5>
              <button type="button" className="close" aria-label="Close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Id: {pokemonData.id}</p>
              <p>Altura: {pokemonData.height}</p>
              <p>Peso: {pokemonData.weight}</p>
              <p>Tipo(s): {getTypes()}</p>
              <p>Movimientos: {getMoves()}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
