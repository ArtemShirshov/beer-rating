import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    height: 60,
    lineHeight: '60px',
  },
  wrapper: {
    cursor: 'pointer',
    userSelect: 'none',
    padding: '0 16px',
    boxShadow: '0 4px 15px rgb(0 0 0 / 15%)',
    background: 'white',
    borderRadius: ' 0 0 4px 4px',
    position: 'fixed',
    zIndex: 1000,
    maxWidth: 1232,
    width: 'calc(100% - 32px)',
    boxSizing: 'border-box',
  },
  icon: {
    marginRight: 8,
    top: 4,
    position: 'relative',
  },
});
