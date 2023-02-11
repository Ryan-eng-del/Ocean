import { GlobalThemeProvider, ocean, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';

const RadioDemo1 = () => {
  const [value, setValue] = useState(1);

  const onChange = (value: any) => {
    setValue(value);
  };

  return (
    <GlobalThemeProvider>
      <ocean.div display={'flex'} mr={4}>
        <RadioGroup onChange={onChange} value={value} mode="horizontal" mr={4}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
        <RadioGroup onChange={onChange} value={value} mode="vertical">
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default RadioDemo1;
