import { createElement, forwardRef } from 'react';
import { convertCSS } from '../Style-System';
import { styledComponents } from './styledComponents';
import { DOMElements, StyleProps } from './system.type';

export function generateBaseCpn(tagName: DOMElements) {
  const Component = styledComponents(tagName)({
    convertCSS,
  });

  const BaseCpn = forwardRef((props: StyleProps, ref) => {
    return createElement(Component, { ref, ...props });
  });

  return BaseCpn;
}
