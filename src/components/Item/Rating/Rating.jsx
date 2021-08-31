import React from 'react';
import { Rating as RatingMaterial } from '@material-ui/lab';
import { ReactComponent as Beer } from './beer.svg';
import { ReactComponent as BeerColor } from './beer_color.svg';

export const Rating = ({ value }) => (
  <RatingMaterial
    name="beer-rating"
    value={value}
    emptyIcon={<Beer />}
    max={10}
    icon={<BeerColor />}
    readOnly
  />
);
