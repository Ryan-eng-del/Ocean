import { Button, Skeleton } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Skeleton row={3} width={[600, 500, '400px']} loading={loading}>
      <Button onClick={() => setLoading(!loading)}>点击展示骨架屏</Button>
    </Skeleton>
  );
};

export default Basic;
