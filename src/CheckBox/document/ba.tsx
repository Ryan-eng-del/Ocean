import { CheckBox, GlobalThemeProvider } from 'Ocean';
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
      <CheckBox
        option={options}
        onChange={onChange}
        defaultSelect={['a', 'b', 'c']}
        mr={5}
      />
    </GlobalThemeProvider>
  );
};

export default Demo1;
