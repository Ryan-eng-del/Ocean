import { convertCSS } from '@cyan-ocean/ui/Style-System';
import createStyled from '@emotion/styled';
import React from 'react';
import { shouldForwardProp } from './filterProps';
import { styledComponents } from './styledComponents';
import { DOMElements } from './system.type';

export function generateBaseCpn(tagName: DOMElements) {
  const Component = styledComponents()(convertCSS);

  const Element = createStyled(tagName, { shouldForwardProp })(Component);

  const OceanComponent = React.forwardRef((props, ref) => {
    return React.createElement(Element as any, {
      ref,
      ...props,
    });
  });

  return OceanComponent;
}
