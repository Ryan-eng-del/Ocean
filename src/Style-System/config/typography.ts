import { generateStyleToken as GST } from '../utils/index';
import { transform } from '../utils/transform';
import {
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  LetterSpacing,
  LineHeight,
  OverflowWrap,
  TextAlign,
  TextIndent,
  TextOverflow,
  TextTransform,
  WhiteSpace,
  WordBreak,
} from './css.type';

export const typography = {
  fontFamily: GST.prop('fontFamily', 'fontweights'),
  fontSize: GST.prop('fontSize', 'fontsizes', transform.px),
  fontWeight: GST.prop('fontWeight', 'fontweights'),
  lineHeight: GST.prop('lineHeight', 'lineheights'),
  letterSpacing: GST.prop('letterSpacing', 'letterspacings'),
  textAlign: true,
  fontStyle: true,
  textIndent: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
};

export interface TypographyProps {
  /**
   * The CSS `font-weight` property
   */
  fontWeight?: FontWeight | number;
  /**
   * The CSS `line-height` property
   */
  lineHeight?: LineHeight | number;
  /**
   * The CSS `letter-spacing` property
   */
  letterSpacing?: LetterSpacing | number;

  /**
   * The CSS `font-size` property
   */
  fontSize?: FontSize | number;
  /**
   * The CSS `font-family` property
   */
  fontFamily?: FontFamily;
  /**
   * The CSS `text-align` property
   */
  textAlign?: TextAlign;
  /**
   * The CSS `font-style` property
   */
  fontStyle?: FontStyle;
  /**
   * The CSS `text-indent` property
   */
  textIndent?: TextIndent;
  /**
   * The CSS `word-break` property
   */
  wordBreak?: WordBreak;
  /**
   * The CSS `overflow-wrap` property
   */
  overflowWrap?: OverflowWrap;
  /**
   * The CSS `text-overflow` property
   */
  textOverflow?: TextOverflow;
  /**
   * The CSS `text-transform` property
   */
  textTransform?: TextTransform;
  /**
   * The CSS `white-space` property
   */
  whiteSpace?: WhiteSpace;
}
