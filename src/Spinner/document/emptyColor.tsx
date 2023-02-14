import { GlobalThemeProvider, Spinner } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Spinner mr={3} emptyColor="#fff" borderColor="#000"></Spinner>
      <Spinner emptyColor="green.500" borderColor="#000"></Spinner>
    </GlobalThemeProvider>
  );
};

export default Basic;
