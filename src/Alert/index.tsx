import React, { ReactNode } from 'react';
interface Alert {
  children: ReactNode;
}

const Alert = (props: Alert) => {
  return <div>{props.children}</div>;
};

export default Alert;
