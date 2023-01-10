import { Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';

const RadioDemo1 = () => {
  const [value, setValue] = useState(1);

  const onChange = (value: any) => {
    setValue(value);
  };

  return (
    <div style={{ display: 'flex', marginRight: '17px' }}>
      <RadioGroup
        onChange={onChange}
        value={value}
        type={'gradual'}
        style={{ marginRight: '20px' }}
      >
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>

      <RadioGroup
        onChange={onChange}
        value={value}
        style={{ marginRight: '20px' }}
      >
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
      <RadioGroup
        onChange={onChange}
        value={value}
        type="text"
        style={{ marginRight: '20px' }}
      >
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
      <RadioGroup onChange={onChange} value={value} type="danger">
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
    </div>
  );
};

export default RadioDemo1;
