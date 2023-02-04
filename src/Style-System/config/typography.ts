import { generateStyleToken as GST } from '../utils/index';
import { transform } from '../utils/transform';
import {
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
} from './css.type';

export const typography = {
  fontFamily: GST.prop('fontFamily', 'fontWeights'),
  fontSize: GST.prop('fontSize', 'fontSizes', transform.px),
  fontWeight: GST.prop('fontWeight', 'fontWeights'),
  lineHeight: GST.prop('lineHeight', 'lineHeights'),
  letterSpacing: GST.prop('letterSpacing', 'letterSpacings'),
};

export interface TypographyProps {
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
}
