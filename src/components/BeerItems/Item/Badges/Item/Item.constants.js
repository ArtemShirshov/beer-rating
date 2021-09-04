import React from 'react';
import { Bad, HappyBeer } from 'Icons';

const recommendationIconEnum = {
  yes: <HappyBeer />,
  no: <Bad />,
};

const recommendationTooltipEnum = {
  yes: 'Выпил бы еще!',
  no: 'Второй раз пить не стал.',
};

export const enumBadges = ({ key, value }) => {
  switch (key) {
    case 'recommendation':
      return {
        icon: recommendationIconEnum[value],
        tooltip: recommendationTooltipEnum[value],
      };
    default:
      return null;
  }
};
