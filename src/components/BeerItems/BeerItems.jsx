import React, { useCallback, useMemo, useState } from 'react';
import data from 'data.json';

import { SORTING } from './BeerItems.constats';
import { BeerItemsView } from './BeerItems.view';

export const BeerItems = () => {
  const [sortSelected, setSort] = useState(SORTING.SCORE);
  const [search, setSearch] = useState('');

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
      case SORTING.SEARCH:
        return data.items.filter(({ title }) =>
          title.toLowerCase().includes(search.toLowerCase())
        );
      default:
        return data;
    }
  }, [search, sortSelected]);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
    setSort(SORTING.SEARCH);
  };

  const onClearSorting = useCallback(() => {
    setSort(SORTING.SCORE);
    setSearch('');
  }, []);

  return React.createElement(BeerItemsView, {
    handleChange,
    handleChangeSearch,
    onClearSorting,
    sortSelected,
    sortData,
    search,
  });
};
