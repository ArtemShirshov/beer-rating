import React, { useCallback, useMemo, useState } from 'react';
import { Beer, BeerColor } from 'Icons';

import { useStyles } from './Header.styles';

export const Header = () => {
  const classes = useStyles();
  const [icon, setIcon] = useState(true);

  const onClick = useCallback(() => {
    setIcon(!icon);
  }, [icon]);

  const Icon = useMemo(() => {
    if (icon) {
      return <BeerColor className={classes.icon} />;
    }

    return <Beer className={classes.icon} />;
  }, [classes.icon, icon]);

  return (
    <header className={classes.root}>
      <div className={classes.wrapper} onClick={onClick}>
        {Icon}
        Beer rating
      </div>
    </header>
  );
};
