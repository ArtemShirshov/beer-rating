import React, { useMemo } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

import { enumBadges } from './Item.constants';
import { useStyles } from '../Badges.styles';

export const Badge = ({ data: { key, value } }) => {
  const classes = useStyles();

  const badgeData = useMemo(
    () =>
      enumBadges({
        key,
        value,
      }),
    [key, value]
  );

  return (
    <Tooltip aria-label="BadgesTooltip" title={badgeData.tooltip}>
      <div className={classes.item}>{badgeData.icon}</div>
    </Tooltip>
  );
};
