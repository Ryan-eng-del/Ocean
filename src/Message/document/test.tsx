import { Button, GlobalThemeProvider } from 'Ocean';
import React from 'react';
import { message } from '../message';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Button
        onClick={() => {
          message({ content: 'msg', position: 'top' });
        }}
        type="primary"
      >
        Message
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
