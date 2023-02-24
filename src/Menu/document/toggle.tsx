import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from '@cyan-ocean/ui';
import React from 'react';
import type { MenuItem } from '../index';

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: any[],
): any {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null),
    getItem('Item 2', 'g2', null),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, []),

  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9', null, [
      getItem('Item 1', 'g14', null),
      getItem('Item 2', 'g25', null),
    ]),
    getItem('Option 10', '10'),
  ]),
];

const MenuUse = () => {
  return <Menu items={items} curSelectKey={'sub1'} ableToggle={true} />;
};

export default MenuUse;
