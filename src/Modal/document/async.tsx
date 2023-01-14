import { Button, Modal } from 'Ocean';
import React, { useState } from 'react';

const DialogBasic = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal
        visible={visible}
        title="Modal"
        onCancel={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('');
              setVisible(false);
            }, 2000);
          });
        }}
        onOk={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('');
              setVisible(false);
            }, 2000);
          });
        }}
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

export default DialogBasic;
