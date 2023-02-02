import GlobalThemeProvider from 'Ocean/Core/System/provider';
import React from 'react';
import { useTheme } from 'styled-components';
import { ocean } from '../../Core/System/index';
const Base = () => {
  const theme = useTheme();
  console.log(theme, 'theme');

  return <ocean.div bgColor={'red.300'}>Ocean Test</ocean.div>;
};

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Base />
    </GlobalThemeProvider>
  );
};

export default Basic;
