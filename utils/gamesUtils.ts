import { Game } from '@/types';

type games = Array<Game>;

export const sortGamesByRecentYear = (games: games) => {
  games.sort((a, b) => {
    if (a.year > b.year) {
      return -1;
    }
    if (a.year < b.year) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
};
