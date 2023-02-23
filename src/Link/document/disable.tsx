import { GlobalThemeProvider, Link } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <p>
        <Link href="#" color="#319795" disable>
          ocean-ui
        </Link>
        <span>is a library of React UI components!</span>
      </p>
    </GlobalThemeProvider>
  );
};

export default Basic;
