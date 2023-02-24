import { Divider, DividerLine } from '@cyan-ocean/ui';
import GlobalThemeProvider from '@cyan-ocean/ui/System/provider';
import React from 'react';
const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Divider>
        <DividerLine></DividerLine>
      </Divider>
    </GlobalThemeProvider>
  );
};

export default Basic;
