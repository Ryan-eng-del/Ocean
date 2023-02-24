import { FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import {
  GlobalThemeProvider,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <InputGroup w="80%">
        <InputLeftElement fontSize={'lg'}>
          <GithubOutlined />
        </InputLeftElement>
        <Input placeholder={'A Input'} />

        <InputRightElement fontSize={'lg'}>
          <FacebookOutlined />
        </InputRightElement>
      </InputGroup>

      <InputGroup my={3} w="60%">
        <InputLeftElement fontSize={'lg'}>
          <GithubOutlined />
        </InputLeftElement>
        <Input placeholder={'A Input'} />
      </InputGroup>

      <InputGroup w="50%">
        <Input placeholder={'A Input'} />
        <InputRightElement fontSize={'lg'}>
          <FacebookOutlined />
        </InputRightElement>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
