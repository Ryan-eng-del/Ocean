import { createElement, forwardRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { systemProps } from './system';
import { DOMElements, SystemProps } from './system.type';

const filterProps = (restProps: Record<string, any>) => {
  let restCssProps = <Record<string, any>>{};
  let elementProps = <Record<string, any>>{};

  for (const k in restProps) {
    if (Reflect.has(systemProps, k)) {
      restCssProps[k] = restProps[k];
    } else {
      elementProps[k] = restProps[k];
    }
  }

  return [restCssProps, elementProps];
};

export function styledComponents(tagName: DOMElements) {
  return function innerReactCpn(props: any) {
    const { convertCSS } = props;
    return forwardRef((props: SystemProps, ref) => {
      const theme = useTheme();
      const { __css, css, ...restProps } = props;
      const [restCssProps, elementProps] = filterProps(restProps);
      const transformCssObject = convertCSS(theme);
      const cssObject = transformCssObject(restCssProps);
      const baseCss = transformCssObject(__css);
      const userCss = transformCssObject(css);

      const element = styled(tagName)`
        ${baseCss}
        ${cssObject}
        ${userCss}
      `;

      return createElement(element, { ref, ...elementProps });
    });
  };
}
