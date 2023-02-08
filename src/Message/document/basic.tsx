import { Button, Message } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <>
      <Button
        width={100}
        height={40}
        onClick={() => {
          Message.open({
            type: 'success',
            content: 'Welcome!  Ocean',
          });
        }}
        type="primary"
      >
        Message
      </Button>
    </>
  );
};

export default Basic;
