import { defineStyle } from '../../Style-System/defineStyle';
import { part } from './part';
import { statusStyle } from './status';
import { variantStyle } from './variant';

const baseStyle = defineStyle({
  display: 'flex',
  padding: 2,
  rounded: 'sm',
  align: 'center',
  c: 'zinc.800',
  transition: 'all 110ms ease',
});

export { statusStyle, baseStyle, part, variantStyle };
