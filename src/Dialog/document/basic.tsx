import { Button, Drawer } from 'Ocean';
import React, { useState } from 'react';

const DialogBasic = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Drawer
        visible={visible}
        title="Modal"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
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
