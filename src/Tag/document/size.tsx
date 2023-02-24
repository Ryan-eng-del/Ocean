import { Tag } from '@cyan-ocean/ui';
import GlobalThemeProvider from '@cyan-ocean/ui/System/provider';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex' }}>
        <Tag size="small">Tag</Tag>
        <Tag style={{ margin: '0 20px' }}>Tag</Tag>
        <Tag size="large">Tag</Tag>
      </div>
    </GlobalThemeProvider>
  );
};

export default Basic;
