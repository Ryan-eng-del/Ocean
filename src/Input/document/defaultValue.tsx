import { GlobalThemeProvider, Input } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Input defaultValue={'defaultValue'} />
    </GlobalThemeProvider>
  );
};

export default Basic;
