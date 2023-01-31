import { createElement, forwardRef } from 'react';
import { convertCss } from '../Style-System';
import { styledComponents } from './styledComponents';
import { DOMElements, StyleProps } from './system.type';

export function generateBaseCpn(tagName: DOMElements) {
  const Component = styledComponents(tagName)({
    convertCss,
  });

  const BaseCpn = forwardRef((props: StyleProps, ref) => {
    return createElement(Component, { ref, ...props });
  });

  return BaseCpn;
}
