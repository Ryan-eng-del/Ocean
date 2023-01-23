import { ExclamationCircleFilled } from '@ant-design/icons';
import { Empty } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <Empty
      icon={
        <ExclamationCircleFilled
          style={{ fontSize: '48px', color: '#f2994b' }}
        />
      }
    >
      <div>Empty</div>
    </Empty>
  );
};

export default Basic;
