import axios from 'axios';
import { useEffect, useState } from 'react';

import discover from '../../api/discover.txt';
import { IMovieItem, IMoviesData } from '../types/movies';

export const useMovies = (searchValue: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [moviesData, setMoviesData] = useState<Partial<IMoviesData>>({});
  const [showingData, setShowingData] = useState<Array<IMovieItem>>([]);

  useEffect(() => {
    setIsLoading(true);
    const timout = setTimeout(() => {
      axios
        .get(discover)

        .then((response) => {
          const moviesData: IMoviesData = response.data;

          setMoviesData(moviesData);
          setShowingData(moviesData.items);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 5000);

    return () => {
      clearTimeout(timout);
    };
  }, []);

  useEffect(() => {
    if (searchValue && moviesData.items && isSearching) {
      const filteredData = moviesData.items.filter((movie) => {
        return movie.title.toLowerCase().includes(searchValue.toLowerCase());
      });

      setTimeout(() => {
        setShowingData(filteredData);
        setIsSearching(false);
      }, 1000);
    }
  }, [searchValue, isSearching]);

  return {
    isLoading,
    isSearching,
    moviesData,
    showingData,
    setIsSearching,
    setShowingData,
  };
};
