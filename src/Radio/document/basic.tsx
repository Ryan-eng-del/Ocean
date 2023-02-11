import { GlobalThemeProvider, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';

const RadioDemo1 = () => {
  const [value, setValue] = useState(1);

  const onChange = (value: any) => {
    setValue(value);
  };

  return (
    <GlobalThemeProvider>
      <RadioGroup onChange={onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
    </GlobalThemeProvider>
  );
};

export default RadioDemo1;
