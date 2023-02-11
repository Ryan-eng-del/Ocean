import { TabCloseIcon, TabLabel, Tag } from 'Ocean';
import GlobalThemeProvider from 'Ocean/System/provider';
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
