import React from 'react';

import { useStyles } from './Badges.styles';
import { Badge } from './Item/Item';

export const Badges = ({ badges }) => {
  const classes = useStyles();

  if (!badges || badges.length === 0) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      {badges.map(({ ...rest }) => (
        <Badge
          data={{
            ...rest,
          }}
          key={rest.key}
        />
      ))}
    </div>
  );
};
