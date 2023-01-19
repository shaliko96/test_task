import { IMenuItem } from './header.types';
import { DiscoverIcon, LiveTvIcon, MoviesIcon, MyStuffIcon, TVShowsIcon } from './Icons/MenuIcons';

export const MENU_ITEMS: Array<IMenuItem> = [
  {
    title: 'Discover',
    Icon: DiscoverIcon,
    url: '/',
  },
  {
    title: 'Live TV',
    Icon: LiveTvIcon,
    url: '/',
  },
  {
    title: 'TV Shows',
    Icon: TVShowsIcon,
    url: '/',
  },
  {
    title: 'Movies',
    Icon: MoviesIcon,
    url: '/',
  },
  {
    title: 'MyStuff',
    Icon: MyStuffIcon,
    url: '/',
  },
];
