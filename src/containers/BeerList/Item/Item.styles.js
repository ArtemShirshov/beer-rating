import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    position: 'relative',
    boxShadow: '0 4px 15px rgba(0, 0, 0, .15)',
  },
  media: {
    height: 200,
  },
  cardContent: {
    paddingBottom: '60px !important',
  },
  cardActions: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    boxSizing: 'border-box',
  },
}));
