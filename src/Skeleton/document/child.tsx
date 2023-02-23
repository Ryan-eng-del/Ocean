import { Button, GlobalThemeProvider, Skeleton } from '@cyan-ocean/ui';
import React, { useState } from 'react';

const Basic = () => {
  const [loading, setLoading] = useState(false);

  return (
    <GlobalThemeProvider>
      <Skeleton row={3} width={[600, 500, '400px']} loading={loading}>
        <Button onClick={() => setLoading(!loading)}>展示骨架屏</Button>
      </Skeleton>
    </GlobalThemeProvider>
  );
};

export default Basic;
