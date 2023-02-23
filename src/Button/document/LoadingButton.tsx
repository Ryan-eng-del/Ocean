import { Button, GlobalThemeProvider } from '@cyan-ocean/ui';
import React from 'react';

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <Button type="primary" marginX={5} loading={true}>
        Button
      </Button>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
