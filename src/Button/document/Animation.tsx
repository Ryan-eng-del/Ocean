import { Button, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button type="text" mr={7} mb={7} animationColor={'#63b3ed'}>
          Button
        </Button>

        <Button type="outline" mr={7} mb={7} animationColor={'#63b3ed'}>
          Button
        </Button>

        <Button type="primary" animationColor={'#f1f5f9'}>
          Button
        </Button>
      </div>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
