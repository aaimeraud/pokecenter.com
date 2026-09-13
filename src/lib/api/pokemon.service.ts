import { Pokemon, PokemonList } from "@/types/pokemon.types";

/**
 * # Poke Api Client
 * - Set the desired return type as a type parameter
 * - Set the endpoint as a parameter
 */
export const apiClient = async <T = unknown>(endpoint: string): Promise<T> => {
  const url = process.env.NEXT_PUBLIC_POKEAPI_BASE_URL;
  // early return if no api url
  if (!url) {
    throw new Error(
      "\n\nNEXT_PUBLIC_POKEAPI_BASE_URL was not found.\nVerify your syntax or if you set it at all.\n",
    );
  }
  // create the url to fetch with the endpoint param
  const response = await fetch(url + endpoint);

  // fetching only successes if the responses does
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    // throws the status code and text of the error
    throw new Error(
      `Something went wrong: HTTP Error ${response.status} \n ${response.statusText}`,
    );
  }
};

/** Returns the `/pokemon`endpoint.
 *
 * @param offset the number of pokemons skipped (if 0, starts from the first. if 10, starts from the 10th)
 * @param limit the number of pokemons shown
 *
 */
export const getPokemonList = async (
  offset: number = 0,
  limit: number = 20,
): Promise<PokemonList> => {
  const list = await apiClient<PokemonList>(
    `/pokemon?offset=${offset}&limit=${limit}`,
  );
  return list;
};

/**
 * Returns the `/pokemon/{id or name}`endpoint.
 */
export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  const pokemon = await apiClient<Pokemon>(`/pokemon/${name.toLowerCase()}`);
  return pokemon;
};
