import React, { ReactNode } from 'react';
interface Message {
  children: ReactNode;
}

const Message = (props: Message) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Message;
