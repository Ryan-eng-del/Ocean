import { RightCircleOutlined } from '@ant-design/icons';
import { Tag } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Tag rightIcon={<RightCircleOutlined />} size="small">
        Tag
      </Tag>
      <Tag rightIcon={<RightCircleOutlined />} style={{ margin: '0 20px' }}>
        Tag
      </Tag>
      <Tag rightIcon={<RightCircleOutlined />} size="large">
        Tag
      </Tag>
    </div>
  );
};

export default Basic;
