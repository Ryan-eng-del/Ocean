import { Button, Modal } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <>
      <Button
        width={100}
        height={40}
        onClick={() => {
          Modal.confirm({
            title: '函数式调用',
            children: '函数式弹框',
            onOk: () => console.log('ok'),
            onCancel: () => console.log('cancel'),
          });
        }}
        type="primary"
      >
        打开Modal
      </Button>
    </>
  );
};

export default Basic;
