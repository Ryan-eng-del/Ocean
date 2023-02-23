import { HomeFilled } from '@ant-design/icons';
import { Breadcrumb, BreadcrumbItem } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <div>
      <Breadcrumb separator="/" outline={true}>
        <BreadcrumbItem icon={<HomeFilled />}>Home</BreadcrumbItem>
        <BreadcrumbItem>Application1</BreadcrumbItem>
        <BreadcrumbItem>Application2</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};
export default Basic;
