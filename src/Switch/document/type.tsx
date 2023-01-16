import { Switch } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = { marginRight: '32px' };
  return (
    <>
      <Switch defaultChecked style={style} />
      <Switch defaultChecked type="light" style={style} />
      <Switch defaultChecked type="ios" style={style} />
      <Switch defaultChecked type="custom" style={style} />
    </>
  );
};

export default Basic;
