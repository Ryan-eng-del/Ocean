import { GlobalThemeProvider, Link } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <p>
        <Link href="#" color="#319795" disable>
          Ocean
        </Link>
        <span>is a library of React UI components!</span>
      </p>
    </GlobalThemeProvider>
  );
};

export default Basic;
