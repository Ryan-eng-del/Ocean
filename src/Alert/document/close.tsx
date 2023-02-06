import {
  Alert,
  AlertCloseIcon,
  AlertIcon,
  AlertTitle,
  GlobalThemeProvider,
} from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Alert>
        <AlertIcon />
        <AlertTitle>This is an Alert!</AlertTitle>
        <AlertCloseIcon />
      </Alert>
      <Alert type="info" marginY={4}>
        <AlertIcon />
        <AlertTitle>This is an Alert!</AlertTitle>
        <AlertCloseIcon />
      </Alert>
      <Alert type="warning" marginY={4}>
        <AlertIcon />
        <AlertTitle>This is an Alert!</AlertTitle>
        <AlertCloseIcon />
      </Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
