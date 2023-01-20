import { Alert } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = { marginBottom: '15px' };
  return (
    <>
      <Alert content="This is a Alert!!" style={style}></Alert>
      <Alert content="This is a Alert!!" style={style} type="success"></Alert>
      <Alert content="This is a Alert!!" style={style} type="warning"></Alert>
      <Alert content="This is a Alert!!" style={style} type="error"></Alert>
      <Alert content="This is a Alert!!" style={style} type="info"></Alert>
    </>
  );
};

export default Basic;
