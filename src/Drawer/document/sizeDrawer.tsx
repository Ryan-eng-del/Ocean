import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHead,
  DrawerHeadTitle,
  GlobalThemeProvider,
  Radio,
  RadioGroup,
} from 'Ocean';
import React, { useState } from 'react';
import { AlignType } from '../../common/type';

const DialogBasic = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string | number>(96);

  const onCancel = () => {
    setVisible(false);
  };
  const onOk = () => {
    setVisible(false);
  };

  const changeSize = (d: AlignType) => {
    setValue(d);
  };

  return (
    <GlobalThemeProvider>
      <RadioGroup
        value={value}
        onChange={(d: any) => changeSize(d)}
        noExam={true}
        type="primary"
        mode="horizontal"
        size="small"
        solid={false}
      >
        <Radio value={96}>384px</Radio>
        <Radio value={'500px'}>500px</Radio>
        <Radio value={'screenW'}>全屏</Radio>
      </RadioGroup>

      <Drawer w={value} visible={visible} onCancel={onCancel}>
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

      <Button
        type="outline"
        onClick={() => setVisible(!visible)}
        style={{ marginTop: '20px' }}
      >
        Open
      </Button>
    </GlobalThemeProvider>
  );
};

export default DialogBasic;
