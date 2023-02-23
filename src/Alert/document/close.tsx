import {
  Alert,
  AlertCloseIcon,
  AlertContent,
  AlertIcon,
  GlobalThemeProvider,
} from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  <GlobalThemeProvider>
    <Alert>
      <AlertIcon />
      <AlertContent>This is an Alert!</AlertContent>
      <AlertCloseIcon />
    </Alert>

    <Alert status="info" marginY={4}>
      <AlertIcon />
      <AlertContent>This is an Alert!</AlertContent>
      <AlertCloseIcon />
    </Alert>

    <Alert status="warning" marginY={4}>
      <AlertIcon />
      <AlertContent>This is an Alert!</AlertContent>
      <AlertCloseIcon />
    </Alert>
  </GlobalThemeProvider>;
};

export default Basic;
