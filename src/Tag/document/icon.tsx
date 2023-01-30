import { LeftCircleOutlined } from '@ant-design/icons';
import { Tag } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Tag leftIcon={<LeftCircleOutlined />} size="small">
        Tag
      </Tag>
      <Tag leftIcon={<LeftCircleOutlined />} style={{ margin: '0 20px' }}>
        Tag
      </Tag>
      <Tag leftIcon={<LeftCircleOutlined />} size="large">
        Tag
      </Tag>
    </div>
  );
};

export default Basic;
