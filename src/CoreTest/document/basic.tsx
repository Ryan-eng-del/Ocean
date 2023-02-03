import GlobalThemeProvider from 'Ocean/System/provider';
import React from 'react';
import { useTheme } from 'styled-components';
import { ocean } from '../../System/index';

const Base = () => {
  const theme = useTheme();
  console.log(theme, 'theme');

  return (
    <ocean.div bgColor={'red.50'} color={'blue.400'} w={'container.sm'}>
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
