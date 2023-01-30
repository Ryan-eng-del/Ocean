import { createElement, forwardRef } from 'react';
import styled from 'styled-components';
import { DOMElements } from './system.type';

export interface StyledProps {
  __css: any;
}

export function styledComponents(tagName: DOMElements) {
  return function innerReactCpn(props: any) {
    const { convertCss } = props;
    return forwardRef((props, ref) => {
      const cssObject = convertCss(props);
      return createElement(
        styled(tagName)`
          ${cssObject}
        `,
        { ref, ...props },
      );
    });
  };
}
