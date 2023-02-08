import Alert from 'Ocean/Alert';
import AlertCloseIcon from 'Ocean/Alert/AlertCloseIcon';
import AlertContent from 'Ocean/Alert/AlertContent';
import AlertIcon from 'Ocean/Alert/AlertIcon';
import AlertTitle from 'Ocean/Alert/AlertTitle';
import { AlertProvider } from 'Ocean/Alert/context';
import { MessageType, PxType } from 'Ocean/common/type';
import React from 'react';
import { AlertVariant } from '../Alert/index';
import MessageStore from './store';

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
  id?: string;
  variant?: AlertVariant;

  position?:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom';
}

export const MessageComponent = (props: Message) => {
  const { type = 'success', variant = 'solid', content, title } = props;

  return (
    <AlertProvider value={{ status: type, variant, setVisible: () => {} }}>
      <Alert status={type}>
        <AlertIcon></AlertIcon>
        <AlertTitle>{title}</AlertTitle>
        <AlertContent>{content}</AlertContent>
        <AlertCloseIcon></AlertCloseIcon>
      </Alert>
    </AlertProvider>
  );
};

function createRenderMessage(opt: Message) {
  return function messageRender() {
    return <MessageComponent {...opt} />;
  };
}

export function message(opt: Message) {
  const message = createRenderMessage(opt);
  return MessageStore.notify(message, opt);
}
