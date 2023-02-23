import { Button, GlobalThemeProvider } from '@cyan-ocean/ui';
import React from 'react';

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button type="primary" mr={7} mb={7} size={'small'}>
          Button
        </Button>
        <Button type="gradual" mr={7} mb={7} size={'medium'}>
          Button
        </Button>
        <Button type="outline" mr={7} mb={7} size={'large'}>
          Button
        </Button>
      </div>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
