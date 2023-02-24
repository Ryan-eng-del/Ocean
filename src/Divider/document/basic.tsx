import {
  Divider,
  DividerLine,
  DividerText,
  GlobalThemeProvider,
} from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Divider>
        <DividerLine></DividerLine>
        <DividerText>Ocean UI</DividerText>
        <DividerLine></DividerLine>
      </Divider>
    </GlobalThemeProvider>
  );
};

export default Basic;
