import { Button, Message, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [value, setValue] = useState<number | string>(100);

  const changeSize = (d: number | string) => {
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
        <Radio value={100}>100px</Radio>
        <Radio value={150}>150px</Radio>
        <Radio value={'200px'}>200px</Radio>
      </RadioGroup>
      <Button
        width={120}
        height={40}
        onClick={() => {
          Message.open({
            type: 'success',
            content: 'Welcome!  Ocean',
            width: value,
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
