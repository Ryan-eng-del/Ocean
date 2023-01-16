import { Switch } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = { marginRight: '32px' };
  return (
    <>
      <Switch defaultChecked style={style} />
      <Switch defaultChecked type="custom" />
    </>
  );
};

export default Basic;
