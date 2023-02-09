import { Button, GlobalThemeProvider, ocean } from 'Ocean';
import { MessageType } from 'Ocean/common/type';
import React from 'react';
import { message } from '../message';

const Basic = () => {
  const types: Array<MessageType> = ['error', 'info', 'success', 'warning'];

  return (
    <GlobalThemeProvider>
      <ocean.div display={'flex'}>
        {types.map((type) => {
          return (
            <Button
              key={type}
              onClick={() => {
                message({ content: 'This a message!', type });
              }}
            >
              {type}
            </Button>
          );
        })}
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default Basic;
