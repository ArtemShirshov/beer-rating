import React from 'react';
import RatingMaterial from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import { Beer, BeerColor } from 'Icons';

export const Rating = ({ value, rating }) => (
  <Tooltip aria-label="Rating" placement="left" title={`${rating} баллов`}>
    <div>
      <RatingMaterial
        emptyIcon={<Beer />}
        icon={<BeerColor />}
        max={10}
        name="beer-rating"
        readOnly
        value={value}
      />
    </div>
  </Tooltip>
);
