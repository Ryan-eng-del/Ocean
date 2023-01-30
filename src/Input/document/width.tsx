import { Input } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = {
    margin: '12px 0',
  };
  return (
    <>
      <Input placeholder="width 80%" width={'80%'} />
      <Input style={style} placeholder="width 60%" width={'60%'} />
      <Input placeholder="width 50%" width={'50%'} />
    </>
  );
};

export default Basic;
