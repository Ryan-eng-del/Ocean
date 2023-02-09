import { GlobalThemeProvider, Input } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Input placeholder={'A Input'} />
    </GlobalThemeProvider>
  );
};

export default Basic;
