import { Button, Message, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [value, setValue] = useState<number>(1000);

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
        <Radio value={1500}>1500</Radio>
        <Radio value={2000}>2000</Radio>
        <Radio value={1000}>1000</Radio>
      </RadioGroup>
      <Button
        width={120}
        height={40}
        onClick={() => {
          Message.open({
            type: 'success',
            content: 'Welcome!  Ocean',
            duration: value,
          });
        }}
        type="outline"
      >
        打开Modal
      </Button>
    </>
  );
};

export default Basic;
