import React, { useCallback, useMemo } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

import { arrayToString } from 'utils/ArrayToString';
import { toast } from 'components/Toast';

import { useStyles } from './Item.styles';
import { Rating } from './Rating/Rating';
import { PropertyRating } from './PropertyRating/PropertyRating';
import { descriptionEnum } from './Item.constants';
import { Badges } from './Badges/Badges';

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
    badges,
  },
}) => {
  const classes = useStyles();

  const preparedDescription = useMemo(() => {
    const descriptionArray = description.map((item) => descriptionEnum[item]);

    return arrayToString(descriptionArray, true);
  }, [description]);

  const onClickShare = useCallback(() => {
    const url = `${window.location.origin}/?s=${encodeURIComponent(title)}`;

    navigator.clipboard.writeText(url).then(
      function () {
        toast.success('Ссылка скопирована');
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
  }, [title]);

  return (
    <Card className={classes.root}>
      <Badges badges={badges} />

      <CardMedia
        className={classes.media}
        image={`static/images/min/${img}`}
        title={title}
      />

      <CardContent className={classes.cardContent}>
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
          <b>Регион:</b> {arrayToString([region.country, region.city])}
        </Typography>

        <CardActions className={classes.cardActions}>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <IconButton onClick={onClickShare}>
                <ShareIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </CardContent>
    </Card>
  );
};
