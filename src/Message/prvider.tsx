import React, { Fragment, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import MessageStore from './store';

export const MessageProvider = () => {
  const store = useSyncExternalStore(
    MessageStore.subscribe,
    MessageStore.getState,
    MessageStore.getState,
  );

  const position = MessageStore.getPosition();

  // const unit = store[position].length;

  const baseStyle = (unit: number) => ({
    // ...positionStyle[position],
    top: position.includes('top') ? unit * 60 + 'px' : undefined,
    bottom: position.includes('bottom') ? unit * 80 + 'px' : undefined,
  });

  const PortalChild = Object.keys(store).map((k) => {
    return store[k as keyof typeof store].map((Msg, index) => {
      return (
        <Fragment key={index}>
          <Msg.messageCpn {...baseStyle(index)} store={store} />
        </Fragment>
      );
    });
  });

  return createPortal(PortalChild, document.body);
};
