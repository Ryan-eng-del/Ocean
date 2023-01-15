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
            width: 100,
          });
        }}
        type="primary"
      >
        打开Modal
      </Button>
    </>
  );
};

export default Basic;
