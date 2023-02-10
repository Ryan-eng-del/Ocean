import { Button, GlobalThemeProvider, Input, InputGroup } from 'Ocean';
import React, { useState } from 'react';
import { InputRightIcon } from '../InputIcon';

const Basic = () => {
  const [show, setShow] = useState(false);

  return (
    <GlobalThemeProvider>
      <InputGroup>
        <Input type={show ? 'text' : 'password'} />
        <InputRightIcon w={24}>
          <Button
            size="small"
            h={8}
            type="primary"
            onClick={() => setShow(!show)}
          >
            {show ? 'hidden' : 'show'}
          </Button>
        </InputRightIcon>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
