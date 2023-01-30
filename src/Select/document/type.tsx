import { Option, Select } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <>
      <Select placeholder="Select option" defaultValue={'option1'}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
      <Select
        placeholder="Select option"
        defaultValue={'option1'}
        variant="underline"
        style={{ margin: '20px 0' }}
      >
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>

      <Select
        placeholder="Select option"
        defaultValue={'option1'}
        variant="unstyle"
      >
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </>
  );
};

export default Basic;
