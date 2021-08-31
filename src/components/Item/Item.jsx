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
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>

          <Rating value={Math.trunc(rating)} />
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Баллы: {rating}
          </Typography>

          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {note}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Крепость: {fortress}%
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Объем: {volume}мл
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Регион: {region.country}, {region.city}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
