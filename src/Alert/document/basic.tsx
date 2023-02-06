import { Alert, AlertIcon, AlertTitle, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Alert>
        <AlertIcon />
        <AlertTitle>This is an Alert!</AlertTitle>
      </Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
