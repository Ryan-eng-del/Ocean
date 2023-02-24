import { Button, GlobalThemeProvider, useMessage } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  const { message } = useMessage();

  return (
    <GlobalThemeProvider>
      <Button
        onClick={() => {
          message({
            content: 'This a message!',
            title: 'Title',
            variant: 'solid',
          });
        }}
        type="primary"
      >
        Message
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
