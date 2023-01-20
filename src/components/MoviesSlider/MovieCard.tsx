import { motion } from 'framer-motion';
import React from 'react';

import { PlayIcon } from '../../icons/PlayIcon';
import { IMovieItem } from '../../types/movies';
import Button from '../Button/Botton';
import InfoBox from '../InfoBox';
import styles from './moviesSlider.module.scss';

interface IMovieCard {
  movie: IMovieItem;
  handleMouseOver: (keyframe: string) => void;
  handleMouseLeave: () => void;
}
const MovieCard: React.FC<IMovieCard> = ({ movie, handleMouseLeave, handleMouseOver }) => {
  const getMovieInfo = ({
    title,
    country,
    year,
    num_seasons,
    length,
    min_age,
    genres,
  }: IMovieItem) => {
    const details = [country, year, length / 60, `${num_seasons} seasons`, `${min_age}+`].join(
      ' | '
    );
    return (
      <>
        <h2 className={styles.movieInfoTitle}>{title}</h2>
        <p className={styles.movieInfoDetails}>{details}</p>
        <p className={styles.movieInfoGenres}>{genres.join(', ')}</p>
      </>
    );
  };

  return (
    <motion.div className={styles.carouselItem}>
      <motion.div
        className={styles.carouselItemImg}
        onMouseOver={() => handleMouseOver(movie.keyframe)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div className={styles.carouselImgWrapper}>
          <img src={`/${movie.poster}`} alt={movie.title} />
        </motion.div>
        <div className={styles.onImgInfo}>
          <div className={styles.tagBox}>
            {movie.is_new && <InfoBox text={'New on NetUP TV'} color={'#DE8B0F'} />}
            <InfoBox text={`IMDB ${movie.imdb_rate}/10`} />
          </div>
          <div className={styles.playBtn}>
            <Button
              type={'outline'}
              value={'More details'}
              Icon={PlayIcon}
              onClick={() => console.log('yes')}
            />
          </div>
        </div>
      </motion.div>
      <div className={styles.movieInfoBox}>{getMovieInfo(movie)}</div>
    </motion.div>
  );
};
export default MovieCard;
