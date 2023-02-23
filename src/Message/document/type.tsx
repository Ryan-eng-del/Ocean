import { Button, GlobalThemeProvider, ocean, useMessage } from '@cyan-ocean/ui';
import { MessageType } from '@cyan-ocean/ui/common/type';
import React from 'react';

const Basic = () => {
  const types: Array<MessageType> = ['error', 'info', 'success', 'warning'];
  const { message } = useMessage();
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
