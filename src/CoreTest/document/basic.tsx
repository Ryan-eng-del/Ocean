import GlobalThemeProvider from 'Ocean/System/provider';
import React from 'react';
import { useTheme } from 'styled-components';
import { ocean } from '../../System/index';

const Base = () => {
  const theme = useTheme();
  console.log(theme, 'theme');

  return (
    <ocean.div
      letterSpacing={'normal'}
      cursor="pointer"
      _hover={{ background: 'red.500' }}
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
