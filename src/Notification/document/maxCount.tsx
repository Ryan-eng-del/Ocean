import {
  Button,
  GlobalThemeProvider,
  Notification,
  Radio,
  RadioGroup,
} from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [value, setValue] = useState<number>(1);

  const changeSize = (d: number) => {
    setValue(d);
  };
  return (
    <GlobalThemeProvider>
      <RadioGroup
        value={value}
        onChange={(d: any) => changeSize(d)}
        noExam={true}
        type="primary"
        mode="horizontal"
        size="small"
        solid={false}
      >
        <Radio value={1}>1</Radio>
        <Radio value={3}>3</Radio>
        <Radio value={5}>5</Radio>
      </RadioGroup>

      <Button
        onClick={() => {
          Notification.open({
            type: 'success',
            content: 'Welcome!  Ocean',
            maxCount: value,
            title: 'Notification',
          });
        }}
        type="primary"
      >
        Notification
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
