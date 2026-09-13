import { getPokemonList } from "@/lib/api/pokemon.service";
import { PokemonList } from "@/types/pokemon.types";
import { useEffect, useState } from "react";

const usePokemonList = () => {
  // define states variables
  const [data, setData] = useState<PokemonList | null>(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchList = async () => {
      // error handling and ui states management
      try {
        setisLoading(true);
        const list = await getPokemonList();
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
  }, []);

  return { data, error, isLoading };
};

export default usePokemonList;
