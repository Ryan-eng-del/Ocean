import { GlobalThemeProvider, Input } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [value, setValue] = useState('');

  const change = (v: string) => {
    setValue(v);
  };

  return (
    <GlobalThemeProvider>
      <div style={{ marginBottom: '13px' }}>current input value: {value}</div>
      <Input
        value={value}
        onChange={(e) => change(e.target.value)}
        placeholder="control-value"
      />
    </GlobalThemeProvider>
  );
};

export default Basic;
