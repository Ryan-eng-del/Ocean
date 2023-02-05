import { convertCSS } from '../Style-System';
import { styledComponents } from './styledComponents';
import { DOMElements } from './system.type';

export function generateBaseCpn(tagName: DOMElements) {
  const Component = styledComponents(tagName)({
    convertCSS,
  });

  return Component;
}
