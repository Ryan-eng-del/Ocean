import { LinkOutlined } from '@ant-design/icons';
import { GlobalThemeProvider, Link } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <p>
        <Link href="#" color="#319795" leftIcon={<LinkOutlined />}>
          Ocean
        </Link>
        <span>
          is a library of
          <Link href="#" color="#1976d2">
            React UI
          </Link>
          components!
        </span>
      </p>
    </GlobalThemeProvider>
  );
};

export default Basic;
