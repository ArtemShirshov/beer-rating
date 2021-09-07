import React from 'react';
import { toast, ToastBar, Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import { Rejected } from 'Icons';

import { useClasses } from './Toaster.styles';

export default () => {
  const classes = useClasses();

  return (
    <Toaster
      gutter={8}
      toastOptions={{
        className: classes.root,
        duration: 7500,
        error: {
          className: clsx(classes.root, classes.error),
        },
        icon: null,
        success: {
          className: clsx(classes.root, classes.success),
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== 'loading' && (
                <span
                  className={classes.close}
                  onClick={() => toast.dismiss(t.id)}
                >
                  <Rejected />
                </span>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};
