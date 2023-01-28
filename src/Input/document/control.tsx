import { Input } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [value, setValue] = useState('');

  const change = (v: string) => {
    if (v.length > 3) return;
    setValue(v);
    if (v.length === 3) {
      setValue('control input');
    }
  };

  return (
    <>
      <div style={{ marginBottom: '13px' }}>current input value: {value}</div>
      <Input value={value} onChange={change} />
    </>
  );
};

export default Basic;
