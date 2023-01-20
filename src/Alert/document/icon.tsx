import { Alert } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <Alert
      content="This is a Alert!!"
      closeElement="知道了"
      showIcon={false}
    ></Alert>
  );
};

export default Basic;
