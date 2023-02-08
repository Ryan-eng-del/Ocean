import {
  CheckCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
  ExclamationCircleFilled,
  LoadingOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { GlobalColor, GlobalPadding } from 'Ocean/common/variable';
import { handlePx } from 'Ocean/util/common';
import React, { ReactNode, useLayoutEffect, useMemo, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { MessageType, PxType } from '../common/type';
import { GlobalFontSize } from '../common/variable';

const MessageWrapper = styled.div<{
  ref: any;
  width: PxType | undefined;
  isEdge: boolean;
}>`
  max-width: 400px;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid ${GlobalColor.OceanBorderLightColor};
  position: fixed;
  border-radius: 10px;
  min-height: 100px;
  box-sizing: border-box;
  opacity: 1;
  color: #000;
  margin-left: 7px;
  padding: ${GlobalPadding.lg} ${GlobalPadding.md};

  animation: ${(props) =>
      props.isEdge ? 'ocean-show-message-rl' : 'ocean-show-message-tb'}
    330ms ease forwards;
  z-index: 11;
  box-sizing: border-box;
  transition: 550ms ease;
  .ocean-content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .ocean-notification-icon {
    margin: 0 23px 0 13px;
  }
  .ocean-content {
    width: ${(props) => (props.width ? handlePx(props.width) : undefined)};
    font-size: ${GlobalFontSize.small};
    margin-top: 12px;
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

interface Notification {
  content: string;
  closeable?: boolean;
  topMessage?: number;
  maxCount?: number;
  changeMessage?: (count: number) => void;
  duration?: number;
  type: MessageType;
  width?: PxType;
  position?: 'topLeft' | 'topCenter' | 'bottomLeft' | 'bottomCenter';
  title: ReactNode;
}

let container: HTMLElement | null;
let topMessage = 0;

const primaryColor = GlobalColor.OceanPrimaryColor,
  errorColor = GlobalColor.OceanRedColor,
  successColor = '#00b42a',
  warningColor = '#ff7d00',
  defaultFontSize = '24px';

const judgePosition = (position: any) => {
  let value = 'top';

  if (position === 'bottomCenter' || position === 'bottomLeft') {
    value = 'bottom';
  }
  return value;
};

const Notification = (props: Notification) => {
  const {
    content,
    closeable,
    topMessage = 0,
    maxCount = 1,
    changeMessage,
    type = 'success',
    width,
    position = 'top',
    title,
  } = props;

  const domRef = useRef<any>(null);

  const isEdge = position === 'bottomLeft' || position === 'topLeft';

  useLayoutEffect(() => {
    if (topMessage > maxCount) {
      changeMessage?.(1);
      domRef.current.style[judgePosition(position)] = `${23}px`;
    } else {
      domRef.current.style[judgePosition(position)] = `${
        (topMessage - 1) * (domRef.current.clientHeight + 10) + 23
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
      <div className="ocean-notification-icon">{messageIcon}</div>
      <div className="ocean-content-wrapper">
        <div className="ocean-title">{title}</div>
        <div className="ocean-content">{content}</div>
      </div>
      {closeable && <CloseOutlined />}
    </MessageWrapper>
  );
};

const addMessage = (message: Notification) => {
  const { duration = 1000 } = message;
  const div = document.createElement('div');
  //toDo 删除 message
  div.setAttribute('class', `box1`);
  //toDo 增加各个方向的 message 的数量管理

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

  function changeHeight(child: HTMLElement, position: any) {
    (child.childNodes[0] as HTMLElement).style[position] = `${
      Number(child.style[position].split('p')[0]) -
      (child.childNodes[0] as HTMLElement).clientHeight
    }px`;
  }

  setTimeout(() => {
    changeHeight(div, judgePosition(message.position));
    setTimeout(() => {
      container?.removeChild(div);
    }, 550);

    if (topMessage > 0) topMessage--;
    //? 这里 + 340 是动画的时间
  }, duration + 340);

  return createRoot(div).render(
    <Notification
      {...message}
      changeMessage={changeMessage}
      topMessage={topMessage}
    />,
  );
};

Notification.open = (props: Notification) => {
  addMessage({ ...props });
};

export default Notification;
