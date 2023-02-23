import { Theme } from '@emotion/react';
import { filterProps } from './filterProps';
import { SystemProps } from './system.type';

export function styledComponents() {
  return function innerReactCpn(convertCSS: any) {
    return (props: SystemProps & { theme: Theme }) => {
      const { __css, css, theme, ...restProps } = props;
      const { restCssProps } = filterProps(restProps);
      const transformCssObject = convertCSS(theme);
      const cssObject = transformCssObject(restCssProps);
      const baseCss = transformCssObject(__css);
      const userCss = transformCssObject(css);

      return { ...baseCss, ...userCss, ...cssObject };
    };
  };
}
