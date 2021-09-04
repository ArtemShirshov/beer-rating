import React, { useCallback, useMemo, useState } from 'react';

import { SORTING } from './BeerItems.constats';
import { BeerItemsView } from './BeerItems.view';
import { sortingItems } from './BeerItems.utils';

export const BeerItems = () => {
  const [sortSelected, setSort] = useState(SORTING.SCORE);
  const [search, setSearch] = useState('');

  const sortData = useMemo(() => {
    return sortingItems(sortSelected, search);
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
