import { generateStyleToken as GST } from '../utils/index';
import {
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
} from './css.type';

export const typography = {
  fontFamily: GST.prop('fontFamily'),
  fontSize: GST.prop('fontSize'),
  fontWeight: GST.prop('fontWeight'),
  lineHeight: GST.prop('lineHeight'),
  letterSpacing: GST.prop('letterSpacing'),
};

export interface TypographyProps {
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
}
