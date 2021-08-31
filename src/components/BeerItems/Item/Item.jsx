import React, { useMemo } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useStyles } from './Item.styles';
import { Rating } from './Rating/Rating';
import { PropertyRating } from './PropertyRating/PropertyRating';
import { descriptionEnum } from './Item.constants';

export const Item = ({
  data: {
    title,
    note,
    img,
    fortress,
    volume,
    region,
    description,
    rating,
    property,
  },
}) => {
  const classes = useStyles();

  const preparedDescription = useMemo(() => {
    const descriptionArray = description.map((item) => descriptionEnum[item]);
    const descriptionString = descriptionArray.toString().replace(',', ', ');

    return descriptionString[0].toUpperCase() + descriptionString.slice(1);
  }, [description]);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`static/images/${img}`}
        title={title}
      />

      <CardContent>
        <Typography component="h2" variant="h5">
          {title}
        </Typography>
        <Typography
          color="textSecondary"
          component="p"
          gutterBottom
          variant="body2"
        >
          {preparedDescription}
        </Typography>

        <Box mb={2}>
          <Rating rating={rating} value={Math.trunc(rating)} />
        </Box>

        <Typography
          color="textSecondary"
          component="p"
          gutterBottom
          variant="body2"
        >
          {note}
        </Typography>

        {property && (
          <Box mb={1}>
            {property?.map(({ level, key }) => (
              <div key={key}>
                <PropertyRating labelKey={key} value={Number(level)} />
              </div>
            ))}
          </Box>
        )}

        <Typography color="textSecondary" component="p" variant="body2">
          <b>Крепость:</b> {fortress}%
        </Typography>
        <Typography color="textSecondary" component="p" variant="body2">
          <b>Объем:</b> {volume}&nbsp;мл
        </Typography>
        <Typography color="textSecondary" component="p" variant="body2">
          <b>Регион:</b> {region.country}
          {region.city ? `, ${region.city}` : null}
        </Typography>
      </CardContent>
    </Card>
  );
};
