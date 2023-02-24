import { Tag } from '@cyan-ocean/ui';
import GlobalThemeProvider from '@cyan-ocean/ui/System/provider';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Tag mr={3}>Tag</Tag>
      <Tag bg={'teal.500'}>Tag</Tag>
    </GlobalThemeProvider>
  );
};

export default Basic;
