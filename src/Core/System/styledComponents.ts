import { createElement, forwardRef } from 'react';
import styled from 'styled-components';
import { MapOfSystemConfig } from '../Style-System/styleSystem';
import { DOMElements, SystemProps } from './system.type';

const filterProps = (restProps: Record<string, string>) => {
  let resultProps = <Record<string, string>>{};
  for (const k in restProps) {
    if (!Reflect.has(MapOfSystemConfig, k)) {
      resultProps[k] = restProps[k];
    }
  }

  return resultProps;
};

export function styledComponents(tagName: DOMElements) {
  return function innerReactCpn(props: any) {
    const { convertCss } = props;

    return forwardRef((props: SystemProps, ref) => {
      const { __css, ...restProps } = props;

      const filterRestProps = filterProps(restProps);
      console.log(filterRestProps, 'props');
      const cssObject = convertCss(props);
      return createElement(
        styled(tagName)`
          ${cssObject}
          ${__css}
        `,
        { ref, ...filterRestProps },
      );
    });
  };
}
