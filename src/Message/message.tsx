import styled from '@emotion/styled';
import Alert from 'Ocean/Alert';
import AlertCloseIcon from 'Ocean/Alert/AlertCloseIcon';
import AlertContent from 'Ocean/Alert/AlertContent';
import AlertIcon from 'Ocean/Alert/AlertIcon';
import AlertTitle from 'Ocean/Alert/AlertTitle';
import { AlertProvider } from 'Ocean/Alert/context';
import { MessageType, PxType } from 'Ocean/common/type';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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

const MessageWrapper = styled.div``;

export const MessageComponent = (props: Message) => {
  const {
    type = 'success',
    variant = 'solid',
    content,
    title,
    duration = 1500,
    position,
    ...restProps
  } = props;

  console.log(duration, position);

  const [visible] = useState(true);

  const baseStyle: StyleProps = {
    maxWidth: '560px',
    minWidth: '300px',
    zIndex: 20,
    position: 'absolute',
    minH: 10,
  };

  return (
    <AlertProvider value={{ status: type, variant, setVisible: () => {} }}>
      <MessageWrapper>
        <CSSTransition
          in={visible}
          timeout={330}
          appear
          classNames={'alert-model'}
          unmountOnExit
        >
          <Alert status={type} css={baseStyle} {...restProps}>
            <AlertIcon></AlertIcon>
            <AlertTitle>{title}</AlertTitle>
            <AlertContent>{content}</AlertContent>
            <AlertCloseIcon></AlertCloseIcon>
          </Alert>
        </CSSTransition>
      </MessageWrapper>
    </AlertProvider>
  );
};

function createRenderMessage(opt: Message) {
  return function messageRender(props: any) {
    return <MessageComponent {...opt} {...props} />;
  };
}

export function message(opt: Message) {
  const message = createRenderMessage(opt);
  return MessageStore.notify(message, opt);
}
