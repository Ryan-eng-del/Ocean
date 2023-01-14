import { Button, Modal, Radio, RadioGroup } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string>('420px');

  const changeSize = (d: string) => {
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
        <Radio value={'420px'}>420px</Radio>
        <Radio value={'500px'}>500px</Radio>
        <Radio value={'600px'}>600px</Radio>
        <Radio value={'650px'}>650px</Radio>
      </RadioGroup>

      <Modal
        visible={visible}
        title="Modal"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        width={value}
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
