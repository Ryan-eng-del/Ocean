import { HomeFilled } from '@ant-design/icons';
import { Breadcrumb, BreadcrumbItem } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  const style = {
    marginBottom: '20px',
  };
  return (
    <>
      <div style={style}>
        <Breadcrumb separator="/" fontSize={15}>
          <BreadcrumbItem icon={<HomeFilled />}>Home</BreadcrumbItem>
          <BreadcrumbItem>Application1</BreadcrumbItem>
          <BreadcrumbItem>Application2</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div style={style}>
        <Breadcrumb separator="/" fontSize={14}>
          <BreadcrumbItem icon={<HomeFilled />}>Home</BreadcrumbItem>
          <BreadcrumbItem>Application1</BreadcrumbItem>
          <BreadcrumbItem>Application2</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <Breadcrumb separator="/" fontSize={'12px'}>
          <BreadcrumbItem icon={<HomeFilled />}>Home</BreadcrumbItem>
          <BreadcrumbItem>Application1</BreadcrumbItem>
          <BreadcrumbItem>Application2</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </>
  );
};
export default Basic;
