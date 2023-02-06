import {
  Alert,
  AlertContent,
  AlertIcon,
  AlertTitle,
  GlobalThemeProvider,
} from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Alert display={'flex'} flexDirection="column">
        <AlertIcon boxSize="40px" />
        <AlertTitle flex={'none'}>This is an Alert!</AlertTitle>
        <AlertContent>Please enjoy Ocean UI!</AlertContent>
      </Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
