import { Button, Notification, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [value, setValue] = useState<number>(1);

  const changeSize = (d: number) => {
    setValue(d);
  };
  return (
    <>
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
        width={100}
        height={40}
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
        打开 Notification
      </Button>
    </>
  );
};

export default Basic;
