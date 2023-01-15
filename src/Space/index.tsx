import React, { ReactNode } from 'react';
interface Message {
  children: ReactNode;
}
const Message = (props: Message) => {
  return <div>Message</div>;
};

export default Message;
