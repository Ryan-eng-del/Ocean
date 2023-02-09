import { motion, Variants } from 'framer-motion';
import {
  Alert,
  AlertCloseIcon,
  AlertContent,
  AlertIcon,
  AlertTitle,
} from 'Ocean';
import { MessageType, PxType } from 'Ocean/common/type';
import React, { useEffect } from 'react';
import { AlertVariant } from '../Alert/index';
import { StyleProps } from '../System/system.type';
import MessageStore from './store';

export type MessagePosition =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom';

const motionVariants: Variants = {
  initial: (props) => {
    const { position } = props;
    const dir = ['top', 'bottom'].includes(position) ? 'y' : 'x';

    let factor = ['top-right', 'bottom-right'].includes(position) ? 1 : -1;
    if (position === 'bottom') factor = 1;
    return {
      opacity: 0,
      [dir]: factor * 24,
    };
  },

  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },

  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export interface Message {
  content: string;
  closeable?: boolean;
  topMessage?: number;
  maxCount?: number;
  changeMessage?: (count: number) => void;
  duration?: number;
  type?: MessageType;
  title?: string;
  width?: PxType;
  id?: React.Key;
  variant?: AlertVariant;
  position?: MessagePosition;
}

export const MessageComponent = React.memo((props: Message & { id: any }) => {
  const {
    type = 'success',
    content,
    title,
    duration = 1500,
    position = 'top',
    id,
    closeable = false,
    ...restProps
  } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      MessageStore.closeId(position, id);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  const baseStyle: StyleProps = {
    minWidth: '300px',
    minHeight: '30px',
    mb: '13px',
  };

  return (
    <motion.li
      layout
      className="ocean-msg"
      variants={motionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={{ position }}
      style={{ display: 'flex' }}
    >
      <Alert
        reuse={true}
        status={type}
        css={baseStyle}
        {...restProps}
        className="message-ocean"
      >
        <AlertIcon></AlertIcon>
        {title && <AlertTitle>{title}</AlertTitle>}
        {content && <AlertContent>{content}</AlertContent>}
        {closeable && (
          <AlertCloseIcon
            pointerEvents="all"
            onClick={() => {
              MessageStore.closeId(position, id);
            }}
          ></AlertCloseIcon>
        )}
      </Alert>
    </motion.li>
  );
});

let counter = 0;

function createRenderMessage(opt: Message) {
  counter += 1;
  const id = opt.id ?? counter;
  return function messageRender(props: any) {
    return <MessageComponent {...opt} {...props} id={id} />;
  };
}

export function message(opt: Message) {
  const message = createRenderMessage(opt);
  return MessageStore.notify(message, opt);
}

export function update(id: React.Key, opt: Message) {
  const message = createRenderMessage(opt);
  return MessageStore.update(message, opt, id);
}
