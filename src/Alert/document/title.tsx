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
      <Alert
        w={96}
        css={{
          display: 'flex',
          flexDirection: 'column',
          marginX: 'auto',
        }}
      >
        <AlertIcon fontSize={'3xl'} />
        <AlertTitle flex={'none'} marginY={3}>
          This is an Alert!
        </AlertTitle>
        <AlertContent>Please enjoy Ocean UI!</AlertContent>
      </Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
