import { filterProps } from './filterProps';

export function styledComponents() {
  return function innerReactCpn(convertCSS: any) {
    return (props: any) => {
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
