import { Input } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = {
    margin: '12px 0',
  };
  return (
    <>
      <Input size="small" placeholder="small size" />
      <Input size="medium" style={style} placeholder="medium size" />
      <Input placeholder="large size and default size" />
    </>
  );
};

export default Basic;
