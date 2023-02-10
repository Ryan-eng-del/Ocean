import { GlobalThemeProvider, Input } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Input placeholder="width 80%" width={'80%'} />
      <Input my={3} placeholder="width 60%" width={'60%'} />
      <Input placeholder="width 50%" width={'50%'} />
    </GlobalThemeProvider>
  );
};

export default Basic;
