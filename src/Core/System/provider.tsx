import { mergeWith } from 'lodash';
import React from 'react';
import { createGlobalStyle, CSSObject, ThemeProvider } from 'styled-components';
import { foundations as theme } from '../CSS-System/theme/index';
import { getCssVar } from '../Style-System/getCSSVar';

const GlobalStyle = createGlobalStyle<{ cssVar: CSSObject }>`
:root {
  ${(props) => props.cssVar}
}

`;
const GlobalThemeProvider = (props: any) => {
  const { children } = props;
  const { cssMap, globalCssVar } = getCssVar(theme);
  return (
    <ThemeProvider theme={mergeWith({}, { cssMap, cssVar: globalCssVar })}>
      {children}
      <GlobalStyle cssVar={globalCssVar} />
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
