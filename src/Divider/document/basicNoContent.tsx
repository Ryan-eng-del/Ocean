import { Divider, DividerLine } from 'Ocean';
import GlobalThemeProvider from 'Ocean/System/provider';
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
