import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHead,
  DrawerHeadTitle,
  GlobalThemeProvider,
} from 'Ocean';
import React, { useState } from 'react';
import DrawerFooter from '../DrawerFooter';

const DialogBasic = () => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => {
    setVisible(false);
  };
  const onOk = () => {
    setVisible(false);
  };

  return (
    <GlobalThemeProvider>
      <Drawer visible={visible} onCancel={onCancel} onOk={onOk}>
        <DrawerHead>
          <DrawerHeadTitle>Create a Drawer</DrawerHeadTitle>
          <DrawerCloseButton />
        </DrawerHead>

        <DrawerBody>Drawer Body</DrawerBody>

        <DrawerFooter>
          <Button type="outline" onClick={onCancel}>
            取消
          </Button>

          <Button type="primary" onClick={onOk} ml={5}>
            确定
          </Button>
        </DrawerFooter>
      </Drawer>

      <Button onClick={() => setVisible(!visible)} type="primary">
        Open
      </Button>
    </GlobalThemeProvider>
  );
};
export default DialogBasic;
