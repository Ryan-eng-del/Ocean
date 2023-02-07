import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHead,
  DrawerHeadTitle,
} from 'Ocean';
import GlobalThemeProvider from 'Ocean/System/provider';
import React, { useState } from 'react';

const DialogBasic = () => {
  const [visible, setVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const onCancel = () => {
    setVisible(false);
  };

  const onOk = async () => {
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('success!');
      }, 1500);
    });
    setVisible(false);
  };

  return (
    <>
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

            <Button
              type="primary"
              onClick={onOk}
              ml={5}
              loading={loading}
              loadingText={'Loading'}
            >
              确定
            </Button>
          </DrawerFooter>
        </Drawer>

        <Button onClick={() => setVisible(!visible)} type="primary">
          Open
        </Button>
      </GlobalThemeProvider>
    </>
  );
};

export default DialogBasic;
