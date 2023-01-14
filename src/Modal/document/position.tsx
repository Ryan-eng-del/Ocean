import { Button, Modal, Radio, RadioGroup } from 'Ocean';
import { DividerAlign } from 'Ocean/common/type';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<DividerAlign>('right');

  const changeSize = (d: DividerAlign) => {
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
        <Radio value={'left'}>Left</Radio>
        <Radio value={'right'}>Right</Radio>
        <Radio value={'center'}>center</Radio>
      </RadioGroup>

      <Modal
        visible={visible}
        title="Modal"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        footerPosition={value}
      >
        I am Modal
      </Modal>

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

export default Basic;
