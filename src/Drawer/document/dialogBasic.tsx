import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHead,
  DrawerHeadTitle,
  Radio,
  RadioGroup,
} from 'Ocean';
import { AlignType } from 'Ocean/common/type';
import GlobalThemeProvider from 'Ocean/System/provider';
import React, { useState } from 'react';

const DialogBasic = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<AlignType>('right');

  const changeDirection = (d: AlignType) => {
    setValue(d);
  };

  const onCancel = () => {
    setVisible(false);
  };
  const onOk = () => {
    setVisible(false);
  };

  return (
    <GlobalThemeProvider>
      <RadioGroup
        value={value}
        onChange={(d: any) => changeDirection(d)}
        noExam={true}
        type="primary"
        mode="horizontal"
        size="small"
        solid={false}
      >
        <Radio value={'left'}>Left</Radio>
        <Radio value={'right'}>Right</Radio>
        <Radio value={'bottom'}>Bottom</Radio>
        <Radio value={'top'}>Top</Radio>
      </RadioGroup>

      <Drawer
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        align={value}
      >
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
