import { CheckBoxGroup } from 'Ocean';
import React from 'react';

const options = [
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
  { label: 'C', value: 'c' },
  { label: 'D', value: 'd' },
  { label: 'E', value: 'e' },
];

const Demo1 = () => {
  const onChange = (...arg: any[]) => {
    console.log('checked--', arg);
  };

  return (
    <div style={{ display: 'flex', marginRight: '17px' }}>
      <CheckBoxGroup
        option={options}
        onChange={onChange}
        defaultSelect={['a', 'e']}
        style={{ marginRight: '20px' }}
        mode="horizontal"
      />
      <CheckBoxGroup
        option={options}
        onChange={onChange}
        defaultSelect={['a', 'e']}
        style={{ marginRight: '20px' }}
        mode="vertical"
      />
    </div>
  );
};

export default Demo1;
