"use client";
import { getPokemonList } from "@/lib/api/pokemon.service";
import { PokemonList } from "@/types/pokemon.types";
import { useEffect, useState } from "react";

/**
 *  Fetches a list of pokemon and manages loading and error states
 *
 * @param offset the number of pokemons skipped (if 0, starts from the first. if 10, starts from the 10th)
 * @param limit the number of pokemon shown
 */
const usePokemonList = (offset?: number, limit?: number) => {
  // define states variables
  const [data, setData] = useState<PokemonList | null>(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchList = async () => {
      // error handling and ui states management
      try {
        setisLoading(true);
        const list = await getPokemonList(offset, limit);
        setData(list);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setisLoading(false);
      }
    };

    fetchList();
  }, [offset, limit]);

  return { data, error, isLoading };
};

export default usePokemonList;
