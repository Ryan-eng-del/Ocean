import { Button, Empty } from '@cyan-ocean/ui';
import GlobalThemeProvider from '@cyan-ocean/ui/System/provider';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Empty>
        <div>Empty</div>
        <Button type="primary" height={30} style={{ marginTop: '12px' }}>
          去创建
        </Button>
      </Empty>
    </GlobalThemeProvider>
  );
};

export default Basic;
