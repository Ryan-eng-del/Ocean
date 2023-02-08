import styled from '@emotion/styled';
import AlertCloseIcon from 'Ocean/Alert/AlertCloseIcon';
import AlertContent from 'Ocean/Alert/AlertContent';
import AlertIcon from 'Ocean/Alert/AlertIcon';
import AlertTitle from 'Ocean/Alert/AlertTitle';
import { AlertProvider } from 'Ocean/Alert/context';
import { MessageType, PxType } from 'Ocean/common/type';
import React, { useEffect } from 'react';
import Alert, { AlertVariant } from '../Alert/index';
import { StyleProps } from '../System/system.type';
import type { MessageStore as MessageProps } from './store';
import MessageStore from './store';

export type MessagePosition =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom';

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
  position?: MessagePosition;
}

const MessageWrapper = styled.div`
  @keyframes down {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const MessageComponent = (
  props: Message & { store: MessageProps; id: any },
) => {
  const {
    type = 'success',
    variant = 'solid',
    content,
    title,
    duration = 1500,
    position = 'bottom',
    id,
    ...restProps
  } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      MessageStore.closeId(position, id);
    }, duration + 330);

    return () => clearTimeout(timer);
  }, []);

  const baseStyle: StyleProps = {
    maxWidth: '560px',
    minWidth: '300px',
    zIndex: 20,
    position: 'fixed',
    minH: 10,
    animation: 'down 330ms ease',
  };

  return (
    <AlertProvider value={{ status: type, variant, setVisible: () => {} }}>
      <MessageWrapper className="message-wrapper">
        <Alert
          reuse={true}
          status={type}
          css={baseStyle}
          {...restProps}
          className="message-ocean"
        >
          <AlertIcon></AlertIcon>
          <AlertTitle>{title}</AlertTitle>
          <AlertContent>{content}</AlertContent>
          <AlertCloseIcon></AlertCloseIcon>
        </Alert>
      </MessageWrapper>
    </AlertProvider>
  );
};

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
