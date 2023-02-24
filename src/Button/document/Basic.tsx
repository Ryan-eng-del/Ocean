import { Button, GlobalThemeProvider } from '@cyan-ocean/ui';
import React from 'react';

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <Button type="primary" w={24} marginX={5}>
        Button
      </Button>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
