import React from 'react';
import { BeerColor } from 'Icons';
import { Typography, Box } from '@material-ui/core';

import { useStyles } from './EmptyList.styles';

export const EmptyList = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div>
        <BeerColor className={classes.icon} />
        <Box mt={2}>
          <Typography variant="h4">Пива нет 😭</Typography>
        </Box>
      </div>
    </div>
  );
};
