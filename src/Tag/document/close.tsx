import { Tag } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <div style={{ display: 'flex', minHeight: '60px' }}>
      <Tag size="small" closeable>
        Tag
      </Tag>
      <Tag style={{ margin: '0 20px' }} closeable>
        Tag
      </Tag>
      <Tag size="large" closeable>
        Tag
      </Tag>
    </div>
  );
};

export default Basic;
