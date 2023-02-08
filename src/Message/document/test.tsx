import { Button, GlobalThemeProvider } from 'Ocean';
import React, { useSyncExternalStore } from 'react';
import { message } from '../message';
import MessageStore from '../store';

const Basic = () => {
  const store = useSyncExternalStore(
    MessageStore.subscribe,
    MessageStore.getState,
    MessageStore.getState,
  );

  console.log(store, 'store');
  console.log(MessageStore.getState(), 'store');

  return (
    <GlobalThemeProvider>
      <Button
        onClick={() => {
          message({ content: 'msg' });
        }}
        type="primary"
      >
        Message
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
