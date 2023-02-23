import { GlobalThemeProvider, Spinner } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Spinner mr={3} speed={'0.6s'}></Spinner>
      <Spinner emptyColor="transparent" speed={'0.3s'}></Spinner>
    </GlobalThemeProvider>
  );
};

export default Basic;
