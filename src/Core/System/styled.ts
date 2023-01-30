import { createElement, forwardRef } from 'react';
import { convertCss } from '../Style-System';
import { styledComponents } from './styledComponents';

export function generateBaseCpn(tagName?: any) {
  const Component = styledComponents(tagName)({
    convertCss,
  });

  const BaseCpn = forwardRef((props: { __css: any }, ref) => {
    return createElement(Component as any, { ref, ...props });
  });

  return BaseCpn;
}
