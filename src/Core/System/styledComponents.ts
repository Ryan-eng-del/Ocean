import { createElement, forwardRef } from 'react';
import styled from 'styled-components';

export interface StyledProps {
  __css: any;
}

export function styledComponents(tagName: any) {
  return function innerReactCpn(props: any) {
    const { convertCss } = props;
    return forwardRef((props, ref) => {
      const cssObject = convertCss(props);
      return createElement(
        styled<any>(tagName)`
          ${cssObject}
        `,
        { ref, ...props },
      );
    });
  };
}
