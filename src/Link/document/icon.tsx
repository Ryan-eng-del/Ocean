import { LinkOutlined } from '@ant-design/icons';
import { GlobalThemeProvider, Link } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Link href="#" color="#319795" leftIcon={<LinkOutlined />}>
        ocean-ui
      </Link>
      <span>is a library of React UI components!</span>
    </GlobalThemeProvider>
  );
};

export default Basic;
