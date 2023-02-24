import { Empty, GlobalThemeProvider } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Empty
        description={
          <span>
            自定义 <a href="#API">Description</a>
          </span>
        }
      ></Empty>
    </GlobalThemeProvider>
  );
};

export default Basic;
