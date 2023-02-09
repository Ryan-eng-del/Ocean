import { GlobalThemeProvider, Input, InputGroup, InputIcon } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <InputGroup>
        <InputIcon></InputIcon>
        <Input placeholder={'A Input'} />
        <InputIcon></InputIcon>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
