import React from 'react';
import { Rating as RatingMaterial } from '@material-ui/lab';
import { Beer, BeerColor } from 'Icons';

export const Rating = ({ value }) => (
  <RatingMaterial
    emptyIcon={<Beer />}
    icon={<BeerColor />}
    max={10}
    name="beer-rating"
    readOnly
    value={value}
  />
);
