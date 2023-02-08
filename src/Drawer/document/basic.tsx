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
      <Drawer visible={visible} onCancel={onCancel}>
        <DrawerHead>
          <DrawerHeadTitle>Create a Drawer</DrawerHeadTitle>
          <DrawerCloseButton />
        </DrawerHead>

        <DrawerBody>This is a Drawer.</DrawerBody>

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
