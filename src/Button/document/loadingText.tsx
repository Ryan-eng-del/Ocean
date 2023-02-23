import { Button, GlobalThemeProvider } from '@cyan-ocean/ui';
import React from 'react';

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <Button type="primary" marginX={5} loading={true} loadingText={'Loading'}>
        Button
      </Button>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
