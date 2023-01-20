import { Alert } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = { marginBottom: '15px' };
  return (
    <>
      <Alert content="This is a Alert!!" showClear style={style}></Alert>

      <Alert
        content="This is a Alert!!"
        showClear
        style={style}
        type="success"
      />

      <Alert
        content="This is a Alert!!"
        showClear
        style={style}
        type="warning"
      ></Alert>
    </>
  );
};

export default Basic;
