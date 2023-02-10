import { GlobalThemeProvider, Input, InputGroup } from 'Ocean';
import React from 'react';
import { InputLeftAddon, InputRightAddon } from '../InputAddon';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <InputGroup placeholder={'A Input'}>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input />
        <InputRightAddon>.com</InputRightAddon>
      </InputGroup>

      <InputGroup placeholder={'A Input'} my={3}>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input />
      </InputGroup>

      <InputGroup placeholder={'A Input'}>
        <Input />
        <InputRightAddon>.com</InputRightAddon>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
