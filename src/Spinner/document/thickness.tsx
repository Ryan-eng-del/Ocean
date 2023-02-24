import { GlobalThemeProvider, ocean, Spinner } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <ocean.div display={'flex'}>
        <Spinner thickness="2px" mr={3} size="xs"></Spinner>
        <Spinner thickness="3px" mr={3} size="sm"></Spinner>
        <Spinner mr={3}></Spinner>
        <Spinner thickness="5px" size="lg" mr={3}></Spinner>
        <Spinner thickness="6px" size="xl"></Spinner>
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default Basic;
