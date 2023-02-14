import { GlobalThemeProvider, Spinner } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Spinner mr={3} borderColor="teal.500" emptyColor="transparent"></Spinner>
      <Spinner
        mr={3}
        emptyColor="transparent"
        borderColor="green.500"
      ></Spinner>
      <Spinner mr={3} emptyColor="transparent" borderColor="red.500"></Spinner>
      <Spinner
        mr={3}
        emptyColor="transparent"
        borderColor="facebook.500"
      ></Spinner>
    </GlobalThemeProvider>
  );
};

export default Basic;
