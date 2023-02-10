import { FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import { GlobalThemeProvider, Input, InputGroup } from 'Ocean';
import React from 'react';
import { InputLeftIcon, InputRightIcon } from '../InputIcon';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <InputGroup w="80%">
        <InputLeftIcon fontSize={'lg'}>
          <GithubOutlined />
        </InputLeftIcon>
        <Input placeholder={'A Input'} />

        <InputRightIcon fontSize={'lg'}>
          <FacebookOutlined />
        </InputRightIcon>
      </InputGroup>

      <InputGroup my={3} w="60%">
        <InputLeftIcon fontSize={'lg'}>
          <GithubOutlined />
        </InputLeftIcon>
        <Input placeholder={'A Input'} />
      </InputGroup>

      <InputGroup w="50%">
        <Input placeholder={'A Input'} />
        <InputRightIcon fontSize={'lg'}>
          <FacebookOutlined />
        </InputRightIcon>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
