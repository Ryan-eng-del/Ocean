import { Alert, AlertContent, GlobalThemeProvider } from '@cyan-ocean/ui';
import React from 'react';
import AlertIcon from '../AlertIcon';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Alert>
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>
      <Alert status="info" marginY={4}>
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>
      <Alert status="warning" marginY={4}>
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>
      <Alert status="error">
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
