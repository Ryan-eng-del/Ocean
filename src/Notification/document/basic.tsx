import { Button, Notification } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <>
      <Button
        width={100}
        height={40}
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
    </>
  );
};

export default Basic;
