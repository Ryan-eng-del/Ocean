import { GlobalThemeProvider, Input } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Input size="xs" mb={3} placeholder="extra small size" />
      <Input size="sm" mb={3} placeholder="small size" />
      <Input mb={3} placeholder="medium size" />
      <Input size="lg" placeholder="large size" />
    </GlobalThemeProvider>
  );
};

export default Basic;
