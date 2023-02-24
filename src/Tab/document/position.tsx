import { AndroidFilled, AppleOutlined } from '@ant-design/icons';
import {
  Button,
  GlobalThemeProvider,
  Radio,
  RadioGroup,
  Tabs,
} from '@cyan-ocean/ui';
import React, { useState } from 'react';
import { AlignType } from '../../common/type';
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
  const [value, setValue] = useState<AlignType>('top');

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
        <Radio value={'top'}>top</Radio>
        <Radio value={'bottom'}>bottom</Radio>
        <Radio value={'left'}>left</Radio>
        <Radio value={'right'}>right</Radio>
      </RadioGroup>
      <Tabs
        position={value}
        items={items}
        bodyStyle={{
          minHeight: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        extraContent={<Button> Content</Button>}
      ></Tabs>
    </GlobalThemeProvider>
  );
};

export default Basic;
