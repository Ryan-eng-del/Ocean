import { Button, Tabs } from 'Ocean';
import React from 'react';
import { TabItem } from '../index';

const items: TabItem[] = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

const Basic = () => {
  return (
    <Tabs
      items={items}
      extraContent={
        <Button type="outline" width={140} height={30}>
          extra Content
        </Button>
      }
      bodyStyle={{
        minHeight: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ></Tabs>
  );
};

export default Basic;
