import { createElement, forwardRef } from 'react';
import { convertCss } from '../Style-System';
import { styledComponents } from './styledComponents';
import { DOMElements } from './system.type';

export function generateBaseCpn(tagName: DOMElements) {
  const Component = styledComponents(tagName)({
    convertCss,
  });

  const BaseCpn = forwardRef((props: { __css: any }, ref) => {
    return createElement(Component, { ref, ...props });
  });

  return BaseCpn;
}
