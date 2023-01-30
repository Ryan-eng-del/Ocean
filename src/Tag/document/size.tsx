import { Tag } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Tag size="small">Tag</Tag>
      <Tag style={{ margin: '0 20px' }}>Tag</Tag>
      <Tag size="large">Tag</Tag>
    </div>
  );
};

export default Basic;
