import { Button, Drawer, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';
import { AlignType } from '../../common/type';

const DialogBasic = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<AlignType>('right');

  const changeDirection = (d: AlignType) => {
    console.log(d, 'de');
    setValue(d);
  };
  return (
    <>
      <RadioGroup
        value={value}
        onChange={(d: any) => changeDirection(d)}
        noExam={true}
        type="primary"
        mode="horizontal"
        size="small"
        solid={false}
      >
        <Radio value={'left'}>Left</Radio>
        <Radio value={'right'}>Right</Radio>
        <Radio value={'bottom'}>Bottom</Radio>
        <Radio value={'top'}>Top</Radio>
      </RadioGroup>
      <Drawer
        visible={visible}
        title="Modal"
        onCancel={() => setVisible(false)}
        onOk={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('');
              setVisible(false);
            }, 2000);
          });
        }}
        align={value}
      >
        Drawer
      </Drawer>
      <Button
        width={120}
        height={40}
        type="outline"
        onClick={() => setVisible(!visible)}
        style={{ marginTop: '20px' }}
      >
        打开Modal
      </Button>
    </>
  );
};

export default DialogBasic;
