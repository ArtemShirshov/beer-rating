import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    position: 'absolute',
    padding: theme.spacing(1),
    boxSizing: 'border-box',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    padding: theme.spacing(1),
    borderRadius: '50%',
    width: theme.spacing(7),
    height: theme.spacing(7),
    boxSizing: 'border-box',
    boxShadow: '0 4px 15px rgba(0, 0, 0, .15)',
  },
}));
