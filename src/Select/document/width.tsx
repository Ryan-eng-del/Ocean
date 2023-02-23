import { GlobalThemeProvider, Option, Select } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Select defaultValue={'option1'} width={'80%'}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>

      <Select defaultValue={'option1'} w={'60%'} my={3}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>

      <Select placeholder="Select option" w={'50%'}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </GlobalThemeProvider>
  );
};

export default Basic;
