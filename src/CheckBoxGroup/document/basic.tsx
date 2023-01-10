import { CheckBoxGroup } from 'Ocean';
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
    <div style={{ display: 'flex', marginRight: '17px' }}>
      <CheckBoxGroup
        option={options}
        onChange={onChange}
        defaultSelect={['a', 'e']}
        style={{ marginRight: '20px' }}
      />
      <CheckBoxGroup
        option={options}
        onChange={onChange}
        defaultSelect={['a', 'e']}
        type={'gradual'}
        style={{ marginRight: '20px' }}
      />
      <CheckBoxGroup
        option={options}
        onChange={onChange}
        defaultSelect={['a', 'e']}
        type={'text'}
        style={{ marginRight: '20px' }}
      />
      <CheckBoxGroup
        option={options}
        onChange={onChange}
        defaultSelect={['a', 'e']}
        type={'danger'}
        style={{ marginRight: '20px' }}
      />
    </div>
  );
};

export default Demo1;
