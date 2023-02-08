import { Button, GlobalThemeProvider, Notification } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Button
        onClick={() => {
          Notification.open({
            type: 'success',
            content: 'Welcome!  Ocean',
            title: 'Notification',
          });
        }}
        type="primary"
      >
        Notification
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
