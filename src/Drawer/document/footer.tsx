import { Button, Drawer, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';
import { AlignType } from '../../common/type';

const DialogBasic = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<AlignType>('right');
  const changeDirection = (d: AlignType) => {
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
        onOk={() => setVisible(false)}
        align={value}
        footer={<div>自定义 Footer</div>}
      >
        DialogBasic
      </Drawer>
      <Button width={100} onClick={() => setVisible(!visible)} type="primary">
        打开抽屉
      </Button>
    </>
  );
};

export default DialogBasic;
