import React, { useRef, useState } from 'react';

import Loader from '../../components/Loader';
import MoviesSlider from '../../components/MoviesSlider';
import Search from '../../components/Search';
import { useBackgroundChanger } from '../../hooks/useBackgroundChanger';
import { useMovies } from '../../hooks/useMovies';
import styles from './main.module.scss';

const MainPage: React.FC = () => {
  const [onFocusSearch, setOnFocusSearch] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { isLoading, isSearching, moviesData, showingData, setIsSearching, setShowingData } =
    useMovies(searchValue);

  const mainRef = useRef(null);
  useBackgroundChanger(moviesData, mainRef.current, isMouseOver);

  return (
    <div ref={mainRef} className={styles.mainContainer}>
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <>
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onFocusSearch={onFocusSearch}
            setOnFocusSearch={setOnFocusSearch}
            setIsSearching={setIsSearching}
            setShowingData={setShowingData}
            moviesData={moviesData}
          />
          {isSearching ? (
            <Loader />
          ) : (
            <MoviesSlider
              setIsMouseOver={setIsMouseOver}
              data={moviesData}
              showingData={showingData}
              mainBlockRef={mainRef.current}
              onFocusSearch={onFocusSearch}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MainPage;
