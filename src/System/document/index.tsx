import { GlobalThemeProvider, ocean } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <ocean.div
        px="3"
        py="2"
        bg="blue.500"
        rounded="md"
        c="slate.50"
        w={36}
        h={10}
        display={'flex'}
        align={'center'}
        cursor="pointer"
        _hover={{ bg: 'blue.600' }}
      >
        Welcome Ocean !
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default Basic;
