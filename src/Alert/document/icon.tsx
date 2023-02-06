import { Alert, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Alert
        content="This is a Alert!!"
        closeElement="知道了"
        showIcon={false}
      ></Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
