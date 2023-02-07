import { Divider, DividerLine, DividerText, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Divider>
        <DividerText>Ocean UI</DividerText>
        <DividerLine></DividerLine>
      </Divider>
      <Divider>
        <DividerLine></DividerLine>
        <DividerText>Ocean UI</DividerText>
        <DividerLine></DividerLine>
      </Divider>
      <Divider>
        <DividerLine></DividerLine>
        <DividerText>Ocean UI</DividerText>
      </Divider>
    </GlobalThemeProvider>
  );
};

export default Basic;
