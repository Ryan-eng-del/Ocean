import { Button, Notification, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';
import { MessagePosition, MessageType } from '../../common/type';

const Basic = () => {
  const [value, setValue] = useState<MessagePosition>('topCenter');
  const [typeValue, setTypeValue] = useState<MessageType>('success');

  const changeSize = (d: MessagePosition) => {
    setValue(d);
  };
  const changeType = (d: MessageType) => {
    setTypeValue(d);
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
        <Radio value={'topCenter'}>topCenter</Radio>
        <Radio value={'bottomCenter'}>bottomCenter</Radio>
        <Radio value={'topLeft'}>topLeft</Radio>
        <Radio value={'bottomLeft'}>bottomLeft</Radio>
      </RadioGroup>

      <RadioGroup
        value={typeValue}
        onChange={(d: any) => changeType(d)}
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
          Notification.open({
            type: typeValue,
            position: value,
            title: 'Notification',
            content: 'Welcome!  Ocean',
          });
        }}
        type="outline"
      >
        打开 Notification
      </Button>
    </>
  );
};

export default Basic;
