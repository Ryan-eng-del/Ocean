import {
  CheckCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
  ExclamationCircleFilled,
  LoadingOutlined,
} from '@ant-design/icons';
import {
  GlobalColor,
  GlobalMargin,
  GlobalPadding,
} from 'Ocean/common/variable';
import { handlePx } from 'Ocean/util/common';
import React, { useLayoutEffect, useMemo, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
import { MessageType, PxType } from '../common/type';
import { GlobalFontSize } from '../common/variable';

const MessageWrapper = styled.div<{
  ref: any;
  width: PxType | undefined;
  isEdge: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid ${GlobalColor.OceanBorderLightColor};
  position: fixed;
  border-radius: 10px;
  height: 47px;
  box-sizing: border-box;
  opacity: 1;
  color: #000;
  margin-left: 7px;
  padding: ${GlobalPadding.xs} ${GlobalPadding.lgg};
  animation: ${(props) =>
      props.isEdge ? 'ocean-show-message-rl' : 'ocean-show-message-tb'}
    330ms ease forwards;
  z-index: 11;
  transition: 550ms ease;
  .toast-content {
    display: block;
    width: ${(props) => (props.width ? handlePx(props.width) : undefined)};
    margin-left: ${GlobalMargin.ms};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @keyframes ocean-show-message-tb {
    0% {
      opacity: 0;
      left: 0;
      transform: translate(0, 0);
    }

    100% {
      left: 50%;
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  @keyframes ocean-show-message-rl {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

interface Message {
  content: string;
  closeable?: boolean;
  topMessage?: number;
  maxCount?: number;
  changeMessage?: (count: number) => void;
  duration?: number;
  type: MessageType;
  width?: PxType;

  position?: 'topLeft' | 'topCenter' | 'bottomLeft' | 'bottomCenter';
}
let container: HTMLElement | null;
let topMessage = 0;

const primaryColor = GlobalColor.OceanPrimaryColor,
  errorColor = GlobalColor.OceanRedColor,
  successColor = '#00b42a',
  warningColor = '#ff7d00',
  defaultFontSize = GlobalFontSize.medium;
const judgePosition = (position: any) => {
  let value = 'top';

  if (position === 'bottomCenter' || position === 'bottomLeft') {
    value = 'bottom';
  }
  return value;
};

const Message = (props: Message) => {
  const {
    content,
    closeable,
    topMessage = 0,
    maxCount = 3,
    changeMessage,
    type,
    width,
    position = 'top',
  } = props;

  const domRef = useRef<any>(null);

  const isEdge = position === 'bottomLeft' || position === 'topLeft';

  useLayoutEffect(() => {
    if (topMessage > maxCount) {
      changeMessage?.(1);
      domRef.current.style[judgePosition(position)] = `${23}px`;
    } else {
      domRef.current.style[judgePosition(position)] = `${
        (topMessage - 1) * 70 + 23
      }px`;
    }
  }, [topMessage]);

  const messageIcon = useMemo(() => {
    if (type === 'info') {
      return (
        <ExclamationCircleFilled
          style={{ color: primaryColor, fontSize: defaultFontSize }}
        />
      );
    }
    if (type === 'error') {
      return (
        <CloseCircleFilled
          style={{ color: errorColor, fontSize: defaultFontSize }}
        />
      );
    }
    if (type === 'normal') {
      return <></>;
    }
    if (type === 'success') {
      return (
        <CheckCircleFilled
          style={{ color: successColor, fontSize: defaultFontSize }}
        />
      );
    }
    if (type === 'warning') {
      return (
        <ExclamationCircleFilled
          style={{ color: warningColor, fontSize: defaultFontSize }}
        />
      );
    }
    if (type === 'loading') {
      return (
        <LoadingOutlined
          style={{ color: primaryColor, fontSize: defaultFontSize }}
        />
      );
    }
  }, [type]);

  return (
    <MessageWrapper ref={domRef} width={width} isEdge={isEdge}>
      {messageIcon}
      <span className="toast-content">{content}</span>
      {closeable && <CloseOutlined />}
    </MessageWrapper>
  );
};

const addMessage = (message: Message) => {
  const { duration = 1000 } = message;
  const div = document.createElement('div');
  div.setAttribute('class', `box1`);

  if (container) {
    container.appendChild(div);
  } else {
    container = document.createElement('div');
    container.setAttribute('class', 'all-container');
    document.body.appendChild(container);
    container.appendChild(div);
  }

  topMessage++;

  const changeMessage = (count: number) => {
    topMessage = count;
  };

  function changeHeight(children: Array<HTMLElement>, position: any) {
    for (const key in children) {
      if (children[key].getAttribute('class')?.startsWith('box1')) {
        const child = children[key].childNodes[0] as HTMLElement;
        child.style[position] = `${
          Number(child.style[position].split('p')[0]) - 70
        }px`;
      }
    }
  }

  setTimeout(() => {
    changeHeight(
      Array.prototype.slice.call(container?.childNodes),
      judgePosition(message.position),
    );
    container?.removeChild(div);
    if (topMessage > 0) topMessage--;
  }, duration + 340);

  return createRoot(div).render(
    <Message
      {...message}
      changeMessage={changeMessage}
      topMessage={topMessage}
    />,
  );
};

Message.open = (props: Message) => {
  addMessage({ ...props });
};

export default Message;
