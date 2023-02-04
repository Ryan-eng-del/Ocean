import { generateStyleToken as t } from '../utils/index';
import {
  BlockSize,
  BoxDecorationBreak,
  BoxSizing,
  Display,
  Float,
  Height,
  InlineSize,
  Isolation,
  MaxBlockSize,
  MaxHeight,
  MaxInlineSize,
  MaxWidth,
  MinBlockSize,
  MinHeight,
  MinInlineSize,
  MinWidth,
  ObjectFit,
  ObjectPosition,
  Overflow,
  OverflowX,
  OverflowY,
  OverscrollBehavior,
  OverscrollBehaviorX,
  OverscrollBehaviorY,
  VerticalAlign,
  Visibility,
  Width,
} from './css.type';

export const SizeAndLayout = {
  width: t.sizes('width'),
  height: t.sizes('height'),
  minHeight: t.sizes('minHeight'),
  maxHeight: t.sizes('maxHeight'),
  minWidth: t.sizes('minWidth'),
  maxWidth: t.sizes('maxWidth'),
  inlineSize: t.sizes('inlineSize'),
  blockSize: t.sizes('blockSize'),
  boxSize: t.sizes(['width', 'height']),
  minInlineSize: t.sizes('minInlineSize'),
  minBlockSize: t.sizes('minBlockSize'),
  maxInlineSize: t.sizes('maxInlineSize'),
  maxBlockSize: t.sizes('maxBlockSize'),

  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: true,
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true,
};

Object.assign(SizeAndLayout, {
  w: SizeAndLayout.width,
  h: SizeAndLayout.height,
  minW: SizeAndLayout.minWidth,
  maxW: SizeAndLayout.maxWidth,
  minH: SizeAndLayout.minHeight,
  maxH: SizeAndLayout.maxHeight,
  overscroll: SizeAndLayout.overscrollBehavior,
  overscrollX: SizeAndLayout.overscrollBehaviorX,
  overscrollY: SizeAndLayout.overscrollBehaviorY,
});

export interface SizeAndLayoutProps {
  /**
   * The CSS `display` property
   */
  display?: Display;
  /**
   * The CSS `width` property
   */
  width?: Width | number;
  /**
   * The CSS `width` property
   */

  w?: Width | number;

  inlineSize?: InlineSize | number;
  /**
   * The CSS `width` and `height` property
   */
  boxSize?: Width | number;
  /**
   * The CSS `max-width` property
   */
  maxWidth?: MaxWidth | number;
  /**
   * The CSS `max-width` property
   */
  maxW?: MaxWidth | number;
  maxInlineSize?: MaxInlineSize | number;
  /**
   * The CSS `min-width` property
   */
  minWidth?: MinWidth | number;
  /**
   * The CSS `min-width` property
   */
  minW?: MinWidth | number;
  minInlineSize?: MinInlineSize | number;
  /**
   * The CSS `height` property
   */
  height?: Height | number;
  /**
   * The CSS `height` property
   */
  h?: Height | number;
  blockSize?: BlockSize | number;
  /**
   * The CSS `max-height` property
   */
  maxHeight?: MaxHeight | number;
  /**
   * The CSS `max-height` property
   */
  maxH?: MaxHeight | number;
  maxBlockSize?: MaxBlockSize | number;
  /**
   * The CSS `min-height` property
   */
  minHeight?: MinHeight | number;
  /**
   * The CSS `min-height` property
   */
  minH?: MinHeight | number;
  minBlockSize?: MinBlockSize | number;
  /**
   * The CSS `vertical-align` property
   */
  verticalAlign?: VerticalAlign;
  /**
   * The CSS `overflow` property
   */
  overflow?: Overflow;
  /**
   * The CSS `overflow-x` property
   */
  overflowX?: OverflowX;
  /**
   * The CSS `overflow-y` property
   */
  overflowY?: OverflowY;
  /**
   * The CSS `box-sizing` property
   */
  boxSizing?: BoxSizing;
  /**
   * The CSS `box-decoration` property
   */
  boxDecorationBreak?: BoxDecorationBreak;
  /**
   * The CSS `float` property
   */
  float?: Float;
  /**
   * The CSS `object-fit` property
   */
  objectFit?: ObjectFit;
  /**
   * The CSS `object-position` property
   */
  objectPosition?: ObjectPosition;
  /**
   * The CSS `overscroll-behavior` property
   */
  overscrollBehavior?: OverscrollBehavior;
  /**
   * The CSS `overscroll-behavior` property
   */
  overscroll?: OverscrollBehavior;
  /**
   * The CSS `overscroll-behavior-x` property
   */
  overscrollBehaviorX?: OverscrollBehaviorX;
  /**
   * The CSS `overscroll-behavior-x` property
   */
  overscrollX?: OverscrollBehaviorX;
  /**
   * The CSS `overscroll-behavior-y` property
   */
  overscrollBehaviorY?: OverscrollBehaviorY;
  /**
   * The CSS `overscroll-behavior-y` property
   */
  overscrollY?: OverscrollBehaviorY;
  /**
   * The CSS `visibility` property
   */
  visibility?: Visibility;
  /**
   * The CSS `isolation` property
   */
  isolation?: Isolation;
}
