import { generateStyleToken as t } from '../utils/index';
import {
  Bottom,
  Inset,
  InsetBlock,
  InsetBlockEnd,
  InsetBlockStart,
  InsetInline,
  InsetInlineEnd,
  InsetInlineStart,
  Left,
  Position,
  Right,
  Top,
  ZIndex,
} from './css.type';

export const position = {
  position: true,
  zIndex: t.prop('zIndex', 'zindex'),
  insetX: t.space(['left', 'right']),
  insetInline: t.space('insetInline'),
  insetY: t.space(['top', 'bottom']),
  insetBlock: t.space('insetBlock'),
  top: t.space('top'),
  insetBlockStart: t.space('insetBlockStart'),
  bottom: t.space('bottom'),
  insetBlockEnd: t.space('insetBlockEnd'),
  left: t.space('left'),
  right: t.space('right'),
};

Object.assign(position, {
  pos: position.position,
});

export interface PositionProps {
  /**
   * The CSS `z-index` property
   */
  zIndex?: ZIndex;
  /**
   * The CSS `top` property
   */
  top?: Top | number;
  insetBlockStart?: InsetBlockStart | number;
  /**
   * The CSS `right` property
   */
  right?: Right | number;
  /**
   * When the direction is `ltr`, `insetInlineEnd` is equivalent to `right`.
   * When the direction is `rtl`, `insetInlineEnd` is equivalent to `left`.
   */
  insetInlineEnd?: InsetInlineEnd | number;
  /**
   * When the direction is `ltr`, `insetEnd` is equivalent to `right`.
   * When the direction is `rtl`, `insetEnd` is equivalent to `left`.
   */
  insetEnd?: InsetInlineEnd | number;
  /**
   * The CSS `bottom` property
   */
  bottom?: Bottom | number;
  insetBlockEnd?: InsetBlockEnd | number;
  /**
   * The CSS `left` property
   */
  left?: Left | number;
  insetInlineStart?: InsetInlineStart | number;
  /**
   * When the direction is `start`, `end` is equivalent to `left`.
   * When the direction is `start`, `end` is equivalent to `right`.
   */
  insetStart?: InsetInlineStart | number;
  /**
   * The CSS `left`, `right`, `top`, `bottom` property
   */
  inset?: Inset | number;
  /**
   * The CSS `left`, and `right` property
   */
  insetX?: Inset | number;
  /**
   * The CSS `top`, and `bottom` property
   */
  insetY?: Inset | number;
  /**
   * The CSS `position` property
   */
  pos?: Position;
  /**
   * The CSS `position` property
   */
  position?: Position;
  insetInline?: InsetInline;
  insetBlock?: InsetBlock;
}
