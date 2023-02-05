import { Button, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button type="primary" marginX={5} size={'small'}>
          Button
        </Button>
        <Button type="gradual" marginX={5} size={'medium'}>
          Button
        </Button>
        <Button type="outline" marginX={5} size={'large'}>
          Button
        </Button>
      </div>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
