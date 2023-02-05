import { mergeWith } from 'lodash';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { foundations as theme } from '../CSS-System/theme/index';
import { getCssVar } from '../Style-System/getCSSVar';

const GlobalStyle = createGlobalStyle<{ cssVar: any }>`
:root {
  ${(props) => {
    return props.cssVar;
  }}
}

`;
const GlobalThemeProvider = (props: any) => {
  const { children } = props;
  const { cssMap, globalCssVar } = getCssVar(theme);
  console.log(globalCssVar);

  return (
    <ThemeProvider theme={mergeWith({}, { cssMap, cssVar: globalCssVar })}>
      {children}
      <GlobalStyle cssVar={globalCssVar} />
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
