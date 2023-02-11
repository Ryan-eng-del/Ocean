import { Tag } from 'Ocean';
import GlobalThemeProvider from 'Ocean/System/provider';
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
