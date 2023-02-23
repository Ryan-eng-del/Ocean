import { TabCloseIcon, TabLabel, Tag } from '@cyan-ocean/ui';
import GlobalThemeProvider from '@cyan-ocean/ui/System/provider';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Tag size="small">
        <TabLabel>Tag</TabLabel>
        <TabCloseIcon />
      </Tag>

      <Tag mx={4}>
        <TabLabel>Tag</TabLabel>
        <TabCloseIcon />
      </Tag>

      <Tag size="large">
        <TabLabel>Tag</TabLabel>
        <TabCloseIcon />
      </Tag>
    </GlobalThemeProvider>
  );
};

export default Basic;
