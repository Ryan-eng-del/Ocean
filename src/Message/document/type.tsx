import { Button, Message, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';
import { MessageType } from '../../common/type';

const Basic = () => {
  const [value, setValue] = useState<MessageType>('success');

  const changeSize = (d: MessageType) => {
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
        <Radio value={'success'}>success</Radio>
        <Radio value={'info'}>info</Radio>
        <Radio value={'error'}>error</Radio>
        <Radio value={'loading'}>loading</Radio>
        <Radio value={'normal'}>normal</Radio>
        <Radio value={'warning'}>warning</Radio>
      </RadioGroup>
      <Button
        width={120}
        height={40}
        onClick={() => {
          Message.open({
            type: value,
            content: 'Welcome!  Ocean',
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
