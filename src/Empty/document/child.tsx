import { Button, Empty } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <Empty>
      <div>Empty</div>
      <Button type="primary" height={30} style={{ marginTop: '12px' }}>
        去创建
      </Button>
    </Empty>
  );
};

export default Basic;
