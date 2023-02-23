import { CheckBox, GlobalThemeProvider } from '@cyan-ocean/ui';
import React from 'react';

//toDo
// const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
  { label: 'C', value: 'c' },
  { label: 'D', value: 'd' },
  { label: 'E', value: 'e' },
];

//toDo
// const optionsWithDisabled = [
//   { label: 'Apple', value: 'Apple' },
//   { label: 'Pear', value: 'Pear' },
//   { label: 'Orange', value: 'Orange', disabled: false },
// ];

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
        />
        <CheckBox
          option={options}
          onChange={onChange}
          defaultSelect={['a', 'e']}
          type={'gradual'}
          mr={5}
        />
        <CheckBox
          option={options}
          onChange={onChange}
          defaultSelect={['a', 'e']}
          type={'text'}
          mr={5}
        />
        <CheckBox
          option={options}
          onChange={onChange}
          defaultSelect={['a', 'e']}
          type={'danger'}
          mr={5}
        />
      </div>
    </GlobalThemeProvider>
  );
};

export default Demo1;
