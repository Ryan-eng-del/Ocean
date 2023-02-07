import { Button, GlobalThemeProvider, ocean } from 'Ocean';
import React from 'react';

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <ocean.div display="flex" flexWrap="wrap">
        <Button type="text" mr={7} mb={7}>
          Button
        </Button>
        <Button type="outline" mr={7} mb={7}>
          Button
        </Button>
        <Button type="primary" mr={7} mb={7}>
          Button
        </Button>
        <Button type="gradual" mr={7} mb={7}>
          Button
        </Button>
        <Button type="danger">Button</Button>
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
