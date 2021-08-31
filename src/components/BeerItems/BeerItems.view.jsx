import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';

import { declOfNum } from 'utils/DeclOfNum';

import { SORTING } from './BeerItems.constats';
import { Item } from './Item/Item';
import { useStyles } from './BeerItems.styles';
import { EmptyList } from './EmptyList/EmptyList';

export const BeerItemsView = ({
  handleChange,
  handleChangeSearch,
  onClearSorting,
  sortSelected,
  sortData,
  search,
}) => {
  const classes = useStyles();

  return (
    <>
      <Box mb={4} mt={2}>
        <Grid alignItems="center" container spacing={2}>
          <Grid item>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel id="sorting-select">Сортировка</InputLabel>
              <Select
                defaultValue={SORTING.SCORE}
                label="Сортировка"
                labelId="sorting-select"
                onChange={handleChange}
                value={sortSelected}
                variant="outlined"
              >
                <MenuItem value={SORTING.SCORE}>По баллам</MenuItem>
                <MenuItem value={SORTING.FORTRESS}>По крепости</MenuItem>
                <MenuItem value={SORTING.VOLUME}>По объему</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <TextField
              id="standard-secondary"
              label="Поиск"
              onChange={handleChangeSearch}
              value={search}
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <Button onClick={onClearSorting} startIcon={<ClearIcon />}>
              Очистить
            </Button>
          </Grid>

          <Grid item>
            <Chip
              className={classes.counter}
              label={`${sortData.length} ${declOfNum(sortData.length)}`}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mb={4}>
        <Grid alignItems="stretch" container spacing={4}>
          {sortData.length > 0 ? (
            sortData.map((item) => (
              <Grid
                className={classes.item}
                item
                key={item.title}
                lg={3}
                md={4}
                sm={6}
                xs={12}
              >
                <Item data={item} />
              </Grid>
            ))
          ) : (
            <EmptyList />
          )}
        </Grid>
      </Box>
    </>
  );
};
