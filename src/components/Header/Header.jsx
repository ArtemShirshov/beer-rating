import React from 'react';
import { BeerColor } from 'Icons';

import { useStyles } from './Header.styles';

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <BeerColor className={classes.icon} />
      Beer rating
    </header>
  );
};
