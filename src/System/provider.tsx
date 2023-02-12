import { Global, ThemeProvider } from '@emotion/react';
import mergeWith from 'lodash.mergewith';
import { MessageProvider } from 'Ocean/Message/prvider';
import React from 'react';
import { foundations as theme } from '../CSS-System/theme/index';
import { getCssVar } from '../Style-System/getCSSVar';

/* 这里通过 emotion 提供的  Global 组件，将变量放到全局 */
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
      <MessageProvider />
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
