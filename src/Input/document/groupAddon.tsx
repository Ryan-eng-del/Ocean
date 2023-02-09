import { GlobalThemeProvider, Input, InputAddon, InputGroup } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <InputGroup>
        <InputAddon></InputAddon>
        <Input placeholder={'A Input'} />
        <InputAddon></InputAddon>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
