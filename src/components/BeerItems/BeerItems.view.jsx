import React from 'react';
import { Box, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';

import { SORTING } from './BeerItems.constats';
import { Item } from './Item/Item';

export const BeerItemsView = ({ handleChange, sortSelected, sortData }) => (
  <>
    <Box mb={4} mt={2}>
      <InputLabel id="sort-select-label">Сортировка</InputLabel>
      <Select
        defaultValue={SORTING.SCORE}
        labelId="sort-select-label"
        onChange={handleChange}
        value={sortSelected}
      >
        <MenuItem value={SORTING.SCORE}>По баллам</MenuItem>
        <MenuItem value={SORTING.FORTRESS}>По крепости</MenuItem>
        <MenuItem value={SORTING.VOLUME}>По объему</MenuItem>
      </Select>
    </Box>

    <Box mb={4}>
      <Grid alignItems="stretch" container spacing={4}>
        {sortData.map((item) => (
          <Grid
            item
            key={item.title}
            style={{
              display: 'flex',
            }}
          >
            <Item data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
);
