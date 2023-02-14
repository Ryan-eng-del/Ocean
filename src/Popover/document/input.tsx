import {
  Button,
  GlobalThemeProvider,
  Input,
  ocean,
  Popover,
  PopoverBody,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from 'Ocean';
import React, { useState } from 'react';
import PopoverContent from '../PopoverContent';

const Basic = () => {
  const [show, setShow] = useState(false);
  return (
    <GlobalThemeProvider>
      <Popover open={show}>
        <ocean.div display={'flex'}>
          <PopoverTrigger>
            <Input />
          </PopoverTrigger>

          <Button onClick={() => setShow(!show)}>
            {show ? 'close' : 'open'}
          </Button>
        </ocean.div>

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
