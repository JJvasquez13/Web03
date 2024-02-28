export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    height: number;
    weight: number;
    types: {
      name: string;
    }[];
    moves: {
      name: string;
    }[];
  }
  