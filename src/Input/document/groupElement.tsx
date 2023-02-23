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
      <InputGroup>
        <InputLeftElement fontSize={'lg'}>
          <GithubOutlined />
        </InputLeftElement>
        <Input placeholder={'A Input'} />
        <InputRightElement fontSize={'lg'}>
          <FacebookOutlined />
        </InputRightElement>
      </InputGroup>

      <InputGroup my={3}>
        <InputLeftElement fontSize={'lg'}>
          <GithubOutlined />
        </InputLeftElement>
        <Input placeholder={'A Input'} />
      </InputGroup>

      <InputGroup>
        <Input placeholder={'A Input'} />
        <InputRightElement fontSize={'lg'}>
          <FacebookOutlined />
        </InputRightElement>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
