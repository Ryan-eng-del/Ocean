import { GlobalThemeProvider, ocean } from 'Ocean';
import React from 'react';

const Base = () => {
  return (
    <GlobalThemeProvider>
      <ocean.div bg="cyan">NIHAO1</ocean.div>
    </GlobalThemeProvider>
  );
};

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Base />
    </GlobalThemeProvider>
  );
};

export default Basic;
