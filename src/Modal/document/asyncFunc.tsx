import { Button, Modal } from 'Ocean';
import React from 'react';

const DialogBasic = () => {
  return (
    <>
      <Button
        width={100}
        height={40}
        onClick={() => {
          Modal.confirm({
            title: '函数式异步调用',
            children: '函数式异步弹框',
            onOk: () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve('');
                }, 2000);
              });
            },
            onCancel: () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve('');
                }, 2000);
              });
            },
          });
        }}
        type="primary"
      >
        打开Modal
      </Button>
    </>
  );
};

export default DialogBasic;
