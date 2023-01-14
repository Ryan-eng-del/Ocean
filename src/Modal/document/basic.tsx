import { Button, Modal } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Modal
        visible={visible}
        title="Modal"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        I am Modal
      </Modal>

      <Button
        width={100}
        height={40}
        onClick={() => setVisible(!visible)}
        type="primary"
      >
        打开Modal
      </Button>
    </>
  );
};

export default Basic;
