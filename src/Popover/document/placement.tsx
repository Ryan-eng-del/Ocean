import {
  Button,
  GlobalThemeProvider,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
} from '@cyan-ocean/ui';
import React, { useState } from 'react';
import type { Popover as PopoverProps } from '../index';

const Basic = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState<any>('bottom');

  const changeSize = (d: PopoverProps['placement']) => {
    setValue(d);
  };

  return (
    <GlobalThemeProvider>
      <RadioGroup
        value={value}
        onChange={(d: any) => changeSize(d)}
        exam={false}
        type="primary"
        mode="horizontal"
        size="small"
        solid={false}
      >
        <Radio value={'bottom'}>bottom</Radio>
        <Radio value={'right'}>right</Radio>
        <Radio value={'left'}>left</Radio>
        <Radio value={'top'}>top</Radio>
      </RadioGroup>

      <Popover open={show} placement={value}>
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
