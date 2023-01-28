import { Input } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = {
    margin: '12px 0',
  };
  return (
    <>
      <Input placeholder="outline" variant="outline" />
      <Input style={style} placeholder="unstyle" variant="unstyle" />
      <Input placeholder="underline" variant="underline" />
    </>
  );
};

export default Basic;
