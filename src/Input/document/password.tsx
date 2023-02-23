import {
  Button,
  GlobalThemeProvider,
  Input,
  InputGroup,
  InputRightElement,
} from '@cyan-ocean/ui';
import React, { useState } from 'react';

const Basic = () => {
  const [show, setShow] = useState(false);

  return (
    <GlobalThemeProvider>
      <InputGroup>
        <Input type={show ? 'text' : 'password'} />
        <InputRightElement w={24}>
          <Button
            size="small"
            h={8}
            type="primary"
            onClick={() => setShow(!show)}
          >
            {show ? 'hidden' : 'show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
