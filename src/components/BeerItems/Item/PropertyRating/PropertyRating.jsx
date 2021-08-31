import React, { useMemo } from 'react';
import RatingMaterial from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { Hops, HopsColor } from 'Icons';

import { useStyles } from './PropertyRating.styles';

const labelEnum = {
  bitterness: 'Горечь',
  hangover: 'Похмелье',
  lightness: 'Легкость',
};

export const PropertyRating = ({ value, labelKey }) => {
  const classes = useStyles();

  const label = useMemo(() => {
    return labelEnum[labelKey];
  }, [labelKey]);

  return (
    <Tooltip
      aria-label="PropertyRating"
      placement="left"
      title={`${value} баллов`}
    >
      <div className={classes.wrapper}>
        <Typography
          className={classes.label}
          color="textSecondary"
          component="span"
          variant="body2"
        >
          {label}:
        </Typography>

        <RatingMaterial
          emptyIcon={<Hops />}
          icon={<HopsColor />}
          max={5}
          name="beer-rating"
          readOnly
          value={value}
        />
      </div>
    </Tooltip>
  );
};
