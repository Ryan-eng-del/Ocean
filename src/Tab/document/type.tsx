import { AndroidFilled, AppleOutlined } from '@ant-design/icons';
import { Button, GlobalThemeProvider, Radio, RadioGroup, Tabs } from 'Ocean';
import React, { useState } from 'react';
import { TabType } from '../../common/type';
import { TabItem } from '../index';

const items: TabItem[] = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
    icon: <AppleOutlined />,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
    icon: <AndroidFilled />,
  },
];

const Basic = () => {
  const [value, setValue] = useState<TabType>('line');

  const onChange = (value: any) => {
    setValue(value);
  };

  return (
    <GlobalThemeProvider>
      <RadioGroup
        onChange={onChange}
        value={value}
        type={'gradual'}
        style={{ marginRight: '20px' }}
        solid={false}
        exam={false}
        mode="horizontal"
      >
        <Radio value={'line'}>line</Radio>
        <Radio value={'text'}>text</Radio>
        <Radio value={'card'}>card</Radio>
        <Radio value={'round'}>round</Radio>
      </RadioGroup>
      <Tabs
        bodyStyle={{
          minHeight: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        items={items}
        extraContent={<Button> Content</Button>}
        type={value}
      ></Tabs>
    </GlobalThemeProvider>
  );
};

export default Basic;
