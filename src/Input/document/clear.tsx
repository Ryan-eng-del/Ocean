import { DeleteOutlined } from '@ant-design/icons';
import { GlobalThemeProvider, Input, InputGroup } from 'Ocean';
import React, { useState } from 'react';
import { InputRightIcon } from '../InputIcon';

const Basic = () => {
  const [value, setValue] = useState('');

  const change = (value: string) => {
    setValue(value);
    console.log('change');
  };

  const clear = () => {
    setValue('');
  };

  return (
    <GlobalThemeProvider>
      <InputGroup
        placeholder={'A Input'}
        value={value}
        onChange={(e) => change(e.target.value)}
      >
        <Input />
        <InputRightIcon fontSize={'lg'}>
          <DeleteOutlined onClick={clear} style={{ cursor: 'pointer' }} />
        </InputRightIcon>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
