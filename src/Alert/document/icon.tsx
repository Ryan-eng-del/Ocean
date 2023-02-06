import { Alert, AlertTitle, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Alert status="info" marginY={4}>
        <AlertTitle>This is an Alert!</AlertTitle>
      </Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
