import { useEffect } from 'react';

import { IMoviesData } from '../types/movies';

export const useBackgroundChanger = (
  moviesData: Partial<IMoviesData>,
  mainElement: HTMLDivElement | null,
  isMouseOver: boolean
) => {
  useEffect(() => {
    let interval: number;
    if (mainElement && moviesData.backgrounds && !isMouseOver) {
      let index = 0;
      mainElement.style.backgroundImage = `url(../../../api/${moviesData?.backgrounds[index].url})`;
      index++;
      interval = setInterval(() => {
        if (moviesData.backgrounds) {
          if (index > moviesData.backgrounds.length - 1) {
            index = 0;
          }
          mainElement.style.backgroundImage = `url(../../../api/${moviesData?.backgrounds[index].url})`;
          index++;
        }
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [moviesData, isMouseOver]);
};
