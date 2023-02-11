import { CheckBox, GlobalThemeProvider } from 'Ocean';
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
    <GlobalThemeProvider>
      <div style={{ display: 'flex', marginRight: '17px' }}>
        <CheckBox
          option={options}
          onChange={onChange}
          defaultSelect={['a', 'e']}
          mr={5}
          mode="horizontal"
        />
      </div>
      <div>
        <CheckBox
          option={options}
          onChange={onChange}
          defaultSelect={['a', 'e']}
          mr={5}
          mode="vertical"
        />
      </div>
    </GlobalThemeProvider>
  );
};

export default Demo1;
