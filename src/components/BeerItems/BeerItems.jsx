import React, { useMemo, useState } from 'react';
import data from 'data.json';

import { SORTING } from './BeerItems.constats';
import { BeerItemsView } from './BeerItems.view';

export const BeerItems = () => {
  const [sortSelected, setSort] = useState(SORTING.SCORE);

  const sortData = useMemo(() => {
    switch (sortSelected) {
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
      default:
        return data;
    }
  }, [sortSelected]);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return React.createElement(BeerItemsView, {
    handleChange,
    sortSelected,
    sortData,
  });
};
