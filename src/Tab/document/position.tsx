import { AndroidFilled, AppleOutlined } from '@ant-design/icons';
import { Button, Radio, RadioGroup, Tabs } from 'Ocean';
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
    <>
      <RadioGroup
        onChange={onChange}
        value={value}
        type={'gradual'}
        style={{ marginRight: '20px' }}
        solid={false}
        noExam={true}
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
        extraContent={
          <Button type="outline" width={140} height={30}>
            extra Content
          </Button>
        }
      ></Tabs>
    </>
  );
};

export default Basic;
