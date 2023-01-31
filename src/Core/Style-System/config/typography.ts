import { generateStyleToken as GST } from '../utils/index';

export const typography = {
  fontFamily: GST.prop('fontFamily'),
  fontSize: GST.prop('fontSize'),
  fontWeight: GST.prop('fontWeight'),
  lineHeight: GST.prop('lineHeight'),
  letterSpacing: GST.prop('letterSpacing'),
};
