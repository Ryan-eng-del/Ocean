import { Alert, AlertTitle, GlobalThemeProvider } from 'Ocean';
import React from 'react';
import AlertIcon from '../AlertIcon';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Alert>
        <AlertIcon />
        <AlertTitle>This is an Alert!</AlertTitle>
      </Alert>
      <Alert type="info" marginY={4}>
        <AlertIcon />
        <AlertTitle>This is an Alert!</AlertTitle>
      </Alert>
      <Alert type="warning" marginY={4}>
        <AlertIcon />
        <AlertTitle>This is an Alert!</AlertTitle>
      </Alert>
      <Alert type="error">
        <AlertIcon />
        <AlertTitle>This is an Alert!</AlertTitle>
      </Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
