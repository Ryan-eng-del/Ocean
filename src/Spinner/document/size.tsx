import { GlobalThemeProvider, ocean, Spinner } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <ocean.div display={'flex'}>
        <Spinner size="xs" mr={3}></Spinner>
        <Spinner size="sm" mr={3}></Spinner>
        <Spinner mr={3}></Spinner>
        <Spinner size="lg" mr={3}></Spinner>
        <Spinner size="xl"></Spinner>
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default Basic;
