import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { IMovieItem, IMoviesData } from '../../types/movies';
import MovieCard from './MovieCard';
import styles from './moviesSlider.module.scss';

interface IMoviesSlider {
  data: Partial<IMoviesData>;
  setIsMouseOver: (arg: boolean) => void;
  mainBlockRef: HTMLDivElement | null;
  showingData: Array<IMovieItem>;
  onFocusSearch: boolean;
}
const MoviesSlider: React.FC<IMoviesSlider> = ({
  data,
  setIsMouseOver,
  mainBlockRef,
  showingData,
  onFocusSearch,
}) => {
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const el: HTMLDivElement = carouselRef.current;

      setCarouselWidth(el.scrollWidth - el.offsetWidth);
    }
  }, [data]);

  const handleMouseOver = (img: string) => {
    if (mainBlockRef) {
      mainBlockRef.style.backgroundImage = `url(/api/${img})`;
      setIsMouseOver(true);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <>
      {showingData.length ? (
        <motion.div
          className={styles.carousel}
          ref={carouselRef}
          style={{ visibility: onFocusSearch ? 'hidden' : 'visible' }}
        >
          <h1 className={styles.sliderTitle}>in the spotlight</h1>
          <motion.div
            drag={'x'}
            dragConstraints={{ right: 0, left: -carouselWidth }}
            className={styles.innerCarousel}
          >
            {showingData?.map((movie, index) => {
              return (
                <MovieCard
                  key={movie.title + index}
                  movie={movie}
                  handleMouseOver={handleMouseOver}
                  handleMouseLeave={handleMouseLeave}
                />
              );
            })}
          </motion.div>
        </motion.div>
      ) : (
        <h2 className={styles.noResultMsg}>No result</h2>
      )}
    </>
  );
};
export default MoviesSlider;
