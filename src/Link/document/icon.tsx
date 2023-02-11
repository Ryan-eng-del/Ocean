import { LinkOutlined } from '@ant-design/icons';
import { GlobalThemeProvider, Link } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Link href="#" color="#319795" leftIcon={<LinkOutlined />}>
        Ocean
      </Link>
      <span>is a library of React UI components!</span>
    </GlobalThemeProvider>
  );
};

export default Basic;
