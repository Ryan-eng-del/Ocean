import { GlobalThemeProvider, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';

const RadioDemo1 = () => {
  const [value, setValue] = useState(1);

  const onChange = (value: any) => {
    setValue(value);
  };

  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex', marginRight: '17px' }}>
        <RadioGroup
          onChange={onChange}
          value={value}
          style={{ marginRight: '20px' }}
          solid={false}
        >
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>

        <RadioGroup onChange={onChange} value={value} solid>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>

        <RadioGroup onChange={onChange} value={value} solid exam>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>

        <RadioGroup onChange={onChange} value={value} solid={false} exam>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>

        <RadioGroup onChange={onChange} value={value} type="gradual" exam>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      </div>
    </GlobalThemeProvider>
  );
};

export default RadioDemo1;
