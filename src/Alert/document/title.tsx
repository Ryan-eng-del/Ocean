import { Alert, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = { marginBottom: '15px' };
  return (
    <GlobalThemeProvider>
      <Alert content="This is a Alert!!" title="Alert" style={style}></Alert>
      <Alert
        content="This is a Alert!!"
        title="Alert"
        type="success"
        style={style}
      ></Alert>
      <Alert
        content="This is a Alert!!"
        title="Alert"
        type="warning"
        style={style}
      ></Alert>
    </GlobalThemeProvider>
  );
};

export default Basic;
