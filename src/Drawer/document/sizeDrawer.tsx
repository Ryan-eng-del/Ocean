import { Button, Drawer, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';
import { AlignType } from '../../common/type';

const DialogBasic = () => {
  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState<string>('375px');

  const changeSize = (d: AlignType) => {
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
        <Radio value={'375px'}>375px</Radio>
        <Radio value={'420px'}>420px</Radio>
        <Radio value={'500px'}>500px</Radio>
        <Radio value={'600px'}>600px</Radio>
      </RadioGroup>
      <Drawer
        visible={visible}
        title="Modal"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        size={value}
      >
        DialogBasic
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
