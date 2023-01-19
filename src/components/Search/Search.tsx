import React, { useEffect, useRef } from 'react';

import { IMovieItem, IMoviesData } from '../../types/movies';
import Button from '../Button/Botton';
import { SearchIcon } from '../Header/Icons/MenuIcons';
import ClearIcon from './Icons/ClearIcon';
import styles from './search.module.scss';

interface ISearch {
  onFocusSearch: boolean;
  setOnFocusSearch: (arg: boolean) => void;
  searchValue: string;
  setSearchValue: (s: string) => void;
  setIsSearching: (s: boolean) => void;
  setShowingData: (data: Array<IMovieItem>) => void;
  moviesData: Partial<IMoviesData>;
}
const Search: React.FC<ISearch> = ({
  onFocusSearch,
  setOnFocusSearch,
  setSearchValue,
  searchValue,
  setIsSearching,
  moviesData,
  setShowingData,
}) => {
  const searchbarRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchbarRef?.current) {
      const element: HTMLDivElement = searchbarRef.current;

      if (onFocusSearch) {
        element.style.transform = 'translateY(-100px)';
      } else {
        element.style.transform = 'translateY(0)';
      }
    }
  }, [onFocusSearch]);
  const handleClearClick = () => {
    setOnFocusSearch(false);
    setSearchValue('');
    setShowingData(moviesData.items!);
  };

  const handleSearch = () => {
    setIsSearching(true);
    setOnFocusSearch(false);
  };

  return (
    <div ref={searchbarRef} className={styles.searchContainer}>
      <div className={styles.searchInputBox}>
        {onFocusSearch ? (
          <span className={styles.clearBtn} onClick={handleClearClick}>
            <ClearIcon />
          </span>
        ) : null}
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="Search"
          onFocus={(e) => {
            setOnFocusSearch(true);
            e.preventDefault();
          }}
          onBlur={() => {
            if (!searchValue) {
              setOnFocusSearch(false);
            }
          }}
        />
      </div>

      <Button type={'primary'} value={'search'} Icon={SearchIcon} onClick={handleSearch} />
    </div>
  );
};
export default Search;
