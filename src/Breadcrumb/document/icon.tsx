import {
  BorderBottomOutlined,
  FileOutlined,
  HomeFilled,
} from '@ant-design/icons';
import { Breadcrumb, BreadcrumbItem } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <div>
      <Breadcrumb separator="/">
        <BreadcrumbItem icon={<HomeFilled />}>Home</BreadcrumbItem>
        <BreadcrumbItem icon={<FileOutlined />}>Application1</BreadcrumbItem>
        <BreadcrumbItem icon={<BorderBottomOutlined />}>
          Application2
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};
export default Basic;
