import { GlobalThemeProvider, Option, Select } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Select placeholder="Select option" mb={3} size="xs">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>

      <Select placeholder="Select option" mb={3} size="sm">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>

      <Select placeholder="Select option" mb={3} size="md">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>

      <Select placeholder="Select option" mb={3} size="lg">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </GlobalThemeProvider>
  );
};

export default Basic;
