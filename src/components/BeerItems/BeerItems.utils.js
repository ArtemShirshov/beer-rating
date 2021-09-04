import data from 'data.json';

import { SORTING } from './BeerItems.constats';

export const sortingItems = (sort, search) => {
  switch (sort) {
    case SORTING.SCORE:
      return data.items.sort((a, b) => {
        return b.rating - a.rating;
      });
    case SORTING.FORTRESS:
      return data.items.sort((a, b) => {
        return b.fortress - a.fortress;
      });
    case SORTING.VOLUME:
      return data.items.sort((a, b) => {
        return b.volume - a.volume;
      });
    case SORTING.SEARCH:
      return data.items.filter(({ title }) =>
        title.toLowerCase().includes(search.toLowerCase())
      );
    default:
      return data;
  }
};
