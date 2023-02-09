import { motion, Variants } from 'framer-motion';
import {
  Alert,
  AlertCloseIcon,
  AlertContent,
  AlertIcon,
  AlertTitle,
  ocean,
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
    /* 初始动画，也就是layout中，第一个元素的动画 */
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
    scale: 0.65,
    transition: {
      duration: 0.3,
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
    variant = 'solid',
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
    display: 'flex',
    maxWidth: '560px',
    align: title ? 'start' : 'center',
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
      style={{ display: 'flex', padding: '6px' }}
    >
      <Alert
        reuse={true}
        status={type}
        css={baseStyle}
        variant={variant}
        {...restProps}
        className="message-ocean"
      >
        <AlertIcon fontSize={title ? '2xl' : 'xl'}></AlertIcon>
        <ocean.div flex="1" maxWidth="100%">
          {title && <AlertTitle mb={1}>{title}</AlertTitle>}
          {content && <AlertContent>{content}</AlertContent>}
        </ocean.div>
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

export function close(id: React.Key) {
  return MessageStore.close(id);
}

export function useMessage() {
  return { message, update, close };
}
