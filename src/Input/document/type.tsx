import { GlobalThemeProvider, Input } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = {
    margin: '12px 0',
  };
  return (
    <GlobalThemeProvider>
      <Input placeholder="outline" />
      <Input style={style} placeholder="unstyle" variant="unstyle" />
      <Input placeholder="underline" variant="underline" />
    </GlobalThemeProvider>
  );
};

export default Basic;
