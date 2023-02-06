import { Alert, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Alert content="This is a Alert!!" closeElement="知道了" showClear />
    </GlobalThemeProvider>
  );
};

export default Basic;
