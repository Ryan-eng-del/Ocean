import { GlobalThemeProvider, Input } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Input placeholder={'A Input'} />
    </GlobalThemeProvider>
  );
};

export default Basic;
