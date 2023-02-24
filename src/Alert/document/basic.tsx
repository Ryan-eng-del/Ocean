import {
  Alert,
  AlertContent,
  AlertIcon,
  AlertTitle,
  GlobalThemeProvider,
} from '@cyan-ocean/ui';

import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Alert marginY={3}>
        <AlertIcon />
        <AlertTitle>This is an Alert!</AlertTitle>
      </Alert>

      <Alert>
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
