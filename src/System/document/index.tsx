import { GlobalThemeProvider, ocean } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <ocean.div
        px="3"
        py="2"
        bg="blue.600"
        rounded="md"
        c="slate.50"
        w={36}
        h={10}
        display={'flex'}
        align={'center'}
      >
        Welcome Ocean !
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default Basic;
