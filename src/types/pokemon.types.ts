// Pokemon related interfaces

import { NamedAPIResource } from "./common.types";

/** `{{baseUrl}}/pokemon` response interface */
export interface PokemonList {
  /** The total number of resources available from this API. */
  count: number;
  /** The URL for the next page in the list. */
  next: string;
  /** The URL for the previous page in the list. */
  previous: string;
  /** A list of named API resources. */
  results: NamedAPIResource[];
}

/** `{{baseUrl}}pokemon/:id` response interface */
export interface Pokemon {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The base experience gained for defeating this Pokémon. */
  base_experience: number;
  /** The height of this Pokémon in decimetres. */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species. */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together. */
  order: number;
  /** The weight of this Pokémon in hectograms. */
  weight: number;
  /** A list of abilities this Pokémon could potentially have. */
  abilities: PokemonAbility[];
  /** A set of sprites used to depict this Pokémon in the game. */
  sprites: PokemonSprites;
  /** A set of cries used to depict this Pokémon in the game. */
  cries: PokemonCries;
  /** A list of base stat values for this Pokémon. */
  stats: PokemonStat[];
  /** A list of details showing types this Pokémon has. */
  types: PokemonType[];
}

interface PokemonSprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    showdown: {
      back_shiny: string | null;
      back_female: string | null;
      front_shiny: string | null;
      back_default: string | null;
      front_female: string | null;
      front_default: string | null;
      back_shiny_female: string | null;
      front_shiny_female: string | null;
    };
  };
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

interface PokemonCries {
  latest: string;
  legacy: string;
}

interface PokemonAbility {
  is_hidden: string;
  slot: number;
  ability: NamedAPIResource;
}
