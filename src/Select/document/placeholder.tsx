import { GlobalThemeProvider, Option, Select } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Select placeholder="Select option">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </GlobalThemeProvider>
  );
};

export default Basic;
