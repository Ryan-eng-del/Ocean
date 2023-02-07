import { Divider, DividerLine, DividerText, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Divider>
        <DividerLine></DividerLine>
        <DividerText fontSize={'xs'}>Ocean UI</DividerText>
        <DividerLine></DividerLine>
      </Divider>
      <Divider>
        <DividerLine></DividerLine>
        <DividerText fontSize={'md'}>Ocean UI</DividerText>
        <DividerLine></DividerLine>
      </Divider>
      <Divider>
        <DividerLine></DividerLine>
        <DividerText fontSize={'lg'}>Ocean UI</DividerText>
        <DividerLine></DividerLine>
      </Divider>
    </GlobalThemeProvider>
  );
};

export default Basic;
