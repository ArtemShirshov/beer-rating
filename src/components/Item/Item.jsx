import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './Item.styles';
import { Rating } from './Rating/Rating';

export const Item = ({
  data: { title, note, img, fortress, volume, region, description, rating },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
            {description}
          </Typography>

          <Rating value={Math.trunc(rating)} />
          <Typography
            color="textSecondary"
            component="p"
            gutterBottom
            variant="body2"
          >
            Баллы: {rating}
          </Typography>

          <Typography
            color="textSecondary"
            component="p"
            gutterBottom
            variant="body2"
          >
            {note}
          </Typography>
          <Typography color="textSecondary" component="p" variant="body2">
            Крепость: {fortress}%
          </Typography>
          <Typography color="textSecondary" component="p" variant="body2">
            Объем: {volume}мл
          </Typography>
          <Typography color="textSecondary" component="p" variant="body2">
            Регион: {region.country}
            {region.city ? `, ${region.city}` : null}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
