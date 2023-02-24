import {
  Alert,
  AlertContent,
  AlertIcon,
  GlobalThemeProvider,
} from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Alert marginY={3}>
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>
      <Alert marginY={3} variant="solid">
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>
      <Alert marginY={3} variant="top-line" status="info">
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>
      <Alert marginY={3} variant="left-line" status="error">
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>

      <Alert marginY={3} variant="bottom-line" status="warning">
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
