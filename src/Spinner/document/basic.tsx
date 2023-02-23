import { GlobalThemeProvider, Spinner } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Spinner mr={3}></Spinner>
      <Spinner emptyColor="transparent"></Spinner>
    </GlobalThemeProvider>
  );
};

export default Basic;
