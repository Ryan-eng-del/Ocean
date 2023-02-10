import { DeleteOutlined } from '@ant-design/icons';
import {
  GlobalThemeProvider,
  Input,
  InputGroup,
  InputRightElement,
} from 'Ocean';
import React, { useState } from 'react';

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
        <InputRightElement fontSize={'lg'}>
          <DeleteOutlined onClick={clear} style={{ cursor: 'pointer' }} />
        </InputRightElement>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
