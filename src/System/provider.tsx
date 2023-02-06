import { Global, ThemeProvider } from '@emotion/react';
import { mergeWith } from 'lodash';
import React from 'react';
import { foundations as theme } from '../CSS-System/theme/index';
import { getCssVar } from '../Style-System/getCSSVar';

export function CSSVars(): JSX.Element {
  const selector = [':host, :root', `[data-theme]`].join(',');

  return (
    <Global
      styles={(theme: any) => {
        return { [selector]: theme.cssVar };
      }}
    />
  );
}

const GlobalThemeProvider = (props: any) => {
  const { children } = props;
  const { cssMap, globalCssVar } = getCssVar(theme);
  return (
    <ThemeProvider theme={mergeWith({}, { cssMap, cssVar: globalCssVar })}>
      <CSSVars />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
