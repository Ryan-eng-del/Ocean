import { CloseOutlined } from '@ant-design/icons';
import { GlobalPadding } from 'Ocean/common/variable';
import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
interface Message {
  content: string;
  icon?: ReactNode;
  closeable?: boolean;
}

const MessageWrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: cyan;
  position: fixed;
  height: 40px;
  top: 23px;
  color: #000;
  left: 50%;
  transform: translate(-50%, 0);
  padding: ${GlobalPadding.ms};
  opacity: 1;
  animation: ocean-show-message 330ms ease;
  z-index: 11;

  @keyframes ocean-show-message {
    0% {
      opacity: 0;
      left: 0;
      transform: translate(0, 0);
    }
  }
`;
const Message = (props: Message) => {
  const { content, icon, closeable } = props;
  return (
    <MessageWrapper>
      {icon}
      <span className="toast-content">{content}</span>
      {closeable && <CloseOutlined />}
    </MessageWrapper>
  );
};

let container: HTMLElement | null;

const addMessage = () => {
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

  return createRoot(div).render(<Message content="a Message" />);
};

Message.success = () => {
  addMessage();
};

export default Message;
