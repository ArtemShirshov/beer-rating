import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { SORTING } from './BeerList.constats';
import { BeerListView } from './BeerListView';
import { sortingItems } from './BeerList.utils';

export const BeerList = () => {
  let location = useLocation();
  let history = useHistory();

  const [sortSelected, setSort] = useState(SORTING.SCORE);
  const [search, setSearch] = useState('');

  const sortData = useMemo(() => {
    return sortingItems(sortSelected, search);
  }, [search, sortSelected]);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const handleChangeSearch = (value, isPush = true) => {
    setSearch(value);
    setSort(SORTING.SEARCH);

    if (isPush) {
      history.push(`/?s=${value}`);
    }
  };

  const onClearSorting = useCallback(() => {
    setSort(SORTING.SCORE);
    setSearch('');
    history.push('/');
  }, [history]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('s');

    if (search) {
      handleChangeSearch(search, false);
    }
  });

  return React.createElement(BeerListView, {
    handleChange,
    handleChangeSearch,
    onClearSorting,
    sortSelected,
    sortData,
    search,
  });
};
