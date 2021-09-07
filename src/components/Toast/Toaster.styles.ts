import { makeStyles } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';

export const useClasses = makeStyles(
  (theme) => ({
    root: {
      overflow: 'hidden',
      backdropFilter: 'blur(4px)',
      background: alpha(theme.palette.common.black, 0.6),
      borderRadius: 4,
      boxShadow: 'none',
      color: theme.palette.common.white,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 16 / 14,
      padding: 8,
      maxWidth: 360,
      textAlign: 'left',
      width: 360,
    },
    error: {
      background: alpha(theme.palette.error.main, 0.8),
      color: theme.palette.common.white,
    },
    success: {
      background: alpha(theme.palette.success.main, 0.8),
      color: theme.palette.common.white,
    },
    close: {
      cursor: 'pointer',
      position: 'absolute',
      right: 0,
      top: 0,
    },
  }),
  {
    name: 'Toast',
  }
);
