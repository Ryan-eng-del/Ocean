import { ocean } from '@cyan-ocean/ui/System';
import { AnimatePresence } from 'framer-motion';
import React, { Fragment, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { StyleProps } from '../System/system.type';
import { MessagePosition } from './message';
import MessageStore from './store';
import { positionStyle } from './theme';

export const MessageProvider = () => {
  const store = useSyncExternalStore(
    MessageStore.subscribe,
    MessageStore.getState,
    MessageStore.getState,
  );

  const baseStyle = (ps: MessagePosition): StyleProps => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 30,
    alignItems: 'center',
    ...positionStyle[ps],
  });

  const positionKeys = Object.keys(store);

  const PortalChild = positionKeys.map((k) => {
    return (
      <ocean.div
        __css={baseStyle(k as MessagePosition)}
        key={k}
        className={`ocean-${k}-message`}
      >
        <AnimatePresence initial={false}>
          {store[k as keyof typeof store].map((Msg) => {
            return (
              <Fragment key={Msg.id}>
                <Msg.messageCpn />
              </Fragment>
            );
          })}
        </AnimatePresence>
      </ocean.div>
    );
  });

  return createPortal(PortalChild, document.body);
};
