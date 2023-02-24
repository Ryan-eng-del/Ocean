import {
  Button,
  GlobalThemeProvider,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from '@cyan-ocean/ui';
import React, { useState } from 'react';

const Basic = () => {
  const [show, setShow] = useState(false);
  return (
    <GlobalThemeProvider>
      <Popover open={show}>
        <PopoverTrigger>
          <Button onClick={() => setShow(!show)}>
            {show ? 'close' : 'open'}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>Header</PopoverHeader>
          <PopoverBody>
            <Button type="primary">按钮</Button>
          </PopoverBody>
          <PopoverFooter>Footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    </GlobalThemeProvider>
  );
};

export default Basic;
