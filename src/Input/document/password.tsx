import { GlobalThemeProvider, Input } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [type] = useState('password');

  return (
    <GlobalThemeProvider>
      <Input type={type} />
    </GlobalThemeProvider>
  );
};

export default Basic;
