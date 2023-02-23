import { GlobalThemeProvider, Input } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Input defaultValue={'defaultValue'} />
    </GlobalThemeProvider>
  );
};

export default Basic;
