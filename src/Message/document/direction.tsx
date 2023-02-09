import { Button, GlobalThemeProvider, ocean, useMessage } from 'Ocean';
import React from 'react';
import { MessagePosition } from '../message';

const Basic = () => {
  const { message } = useMessage();
  const positions: Array<MessagePosition> = [
    'top',
    'bottom',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ];

  return (
    <GlobalThemeProvider>
      <ocean.div display={'flex'}>
        {positions.map((position) => {
          return (
            <Button
              key={position}
              onClick={() => {
                message({ content: 'This a message!', position });
              }}
            >
              {position}
            </Button>
          );
        })}
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default Basic;
