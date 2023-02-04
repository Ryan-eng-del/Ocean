import GlobalThemeProvider from 'Ocean/System/provider';
import React from 'react';
import { useTheme } from 'styled-components';
import { ocean } from '../../System/index';

const Base = () => {
  const theme = useTheme();
  console.log(theme, 'theme');

  return (
    <ocean.div
      mx={10}
      px={6}
      overflow="hidden"
      rounded={'xl'}
      bg="red.500"
      fontSize={'25px'}
      display={'flex'}
      justify={'center'}
      border={'1px'}
      borderColor={'red.500'}
      transitionDuration={'fast'}
    >
      Ocean Test
    </ocean.div>
  );
};

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Base />
    </GlobalThemeProvider>
  );
};

export default Basic;
