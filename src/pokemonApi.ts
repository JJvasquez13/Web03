// pokemonAPI.ts

import axios from 'axios';

// Define una interfaz para los detalles del Pokémon
export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { name: string }[];
  moves: { name: string }[];
}

// Función para obtener los detalles de un Pokémon específico
export async function fetchPokemonDetails(name: string): Promise<PokemonDetails> {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = response.data;

    // Construye el objeto PokemonDetails con los datos relevantes
    const pokemonDetails: PokemonDetails = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map((type: { name: string }) => ({ name: type.name })),
      moves: data.moves.map((move: { name: string }) => ({ name: move.name })),
    };

    return pokemonDetails;
  } catch (error) {
    console.error('Error al obtener los detalles del Pokémon:', error);
    throw error;
  }
}
