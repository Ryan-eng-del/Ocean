import { LinkOutlined } from '@ant-design/icons';
import { GlobalThemeProvider, Link } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <p>
        <Link href="#" color="#319795" leftIcon={<LinkOutlined />}>
          ocean-ui
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
