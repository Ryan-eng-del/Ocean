import { Button, GlobalThemeProvider, ocean, useMessage } from '@cyan-ocean/ui';
import React, { useRef } from 'react';
import { update } from '../message';

const Basic = () => {
  let newId = useRef<React.Key>('');
  const { message } = useMessage();
  return (
    <GlobalThemeProvider>
      <ocean.div display={'flex'}>
        <Button
          onClick={() => {
            newId.current = message({ content: 'This a message!' });
          }}
          type="primary"
        >
          Message
        </Button>

        <Button
          onClick={() => {
            update(newId.current, { content: 'New message!' });
          }}
        >
          Update
        </Button>
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default Basic;
