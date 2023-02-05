import { mergeWith } from 'lodash';
import React, { useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { foundations as theme } from '../CSS-System/theme/index';
import { getCssVar } from '../Style-System/getCSSVar';

const GlobalStyle = createGlobalStyle<{ cssVar: any }>`
:root {
  ${(props) => {
    console.log(props.cssVar, 'var');
    return props.cssVar;
  }}
}

`;
const GlobalThemeProvider = (props: any) => {
  const { children } = props;
  const { cssMap, globalCssVar } = getCssVar(theme);
  console.log(globalCssVar);

  useEffect(() => {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `:root ${{ ...globalCssVar }}`;

    document.getElementsByTagName('head')!.item(0)!.appendChild(style);
  }, []);

  // const a = document.createElement("style");
  // a.append
  return (
    <ThemeProvider theme={mergeWith({}, { cssMap, cssVar: globalCssVar })}>
      {children}
      <GlobalStyle cssVar={globalCssVar} />
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
