import {
  Border,
  BorderBlock,
  BorderBlockEnd,
  BorderBlockEndColor,
  BorderBlockEndStyle,
  BorderBlockEndWidth,
  BorderBlockStart,
  BorderBlockStartColor,
  BorderBlockStartStyle,
  BorderBlockStartWidth,
  BorderBottom,
  BorderBottomColor,
  BorderBottomStyle,
  BorderEndEndRadius,
  BorderInline,
  BorderInlineEnd,
  BorderInlineEndColor,
  BorderInlineEndStyle,
  BorderInlineEndWidth,
  BorderInlineStart,
  BorderInlineStartColor,
  BorderInlineStartStyle,
  BorderInlineStartWidth,
  BorderLeft,
  BorderLeftColor,
  BorderLeftStyle,
  BorderRadius,
  BorderRight,
  BorderRightColor,
  BorderRightStyle,
  BorderStyle,
  BorderTop,
  BorderTopColor,
  BorderTopStyle,
  BorderWidth,
} from './css.type';
import { generateStyleToken as t } from './utils/index';

export const border = {
  border: t.borders('border'),
  borderWidth: t.borders('borderWidth'),
  borderStyle: true,
  borderColor: t.colors('borderColor'),
  borderRadius: t.radius('borderRadius'),
  borderTop: t.borders('borderTop'),
  borderBlockStart: t.borders('borderBlockStart'),
  borderTopLeftRadius: t.radius('borderTopLeftRadius'),

  borderTopRightRadius: t.radius('borderTopRightRadius'),

  borderRight: t.borders('borderRight'),
  borderInlineEnd: t.borders('borderInlineEnd'),
  borderBottom: t.borders('borderBottom'),
  borderBlockEnd: t.borders('borderBlockEnd'),
  borderBottomLeftRadius: t.radius('borderBottomLeftRadius'),
  borderBottomRightRadius: t.radius('borderBottomRightRadius'),
  borderLeft: t.borders('borderLeft'),
  borderInlineStart: {
    property: 'borderInlineStart',
    scale: 'borders',
  },

  borderX: t.borders(['borderLeft', 'borderRight']),
  borderInline: t.borders('borderInline'),
  borderY: t.borders(['borderTop', 'borderBottom']),
  borderBlock: t.borders('borderBlock'),
  borderTopWidth: t.borders('borderTopWidth'),
  borderBlockStartWidth: t.borders('borderBlockStartWidth'),
  borderTopColor: t.colors('borderTopColor'),
  borderBlockStartColor: t.colors('borderBlockStartColor'),
  borderTopStyle: true,
  borderBlockStartStyle: true,
  borderBottomWidth: t.borderWidths('borderBottomWidth'),
  borderBlockEndWidth: t.borderWidths('borderBlockEndWidth'),
  borderBottomColor: t.colors('borderBottomColor'),
  borderBlockEndColor: t.colors('borderBlockEndColor'),
  borderBottomStyle: true,
  borderBlockEndStyle: true,
  borderLeftWidth: t.borderWidths('borderLeftWidth'),
  borderInlineStartWidth: t.borderWidths('borderInlineStartWidth'),
  borderLeftColor: t.colors('borderLeftColor'),
  borderInlineStartColor: t.colors('borderInlineStartColor'),
  borderLeftStyle: true,
  borderInlineStartStyle: true,
  borderRightWidth: t.borderWidths('borderRightWidth'),
  borderInlineEndWidth: t.borderWidths('borderInlineEndWidth'),
  borderRightColor: t.colors('borderRightColor'),
  borderInlineEndColor: t.colors('borderInlineEndColor'),
  borderRightStyle: true,
  borderInlineEndStyle: true,
  borderTopRadius: t.radius(['borderTopLeftRadius', 'borderTopRightRadius']),

  borderBottomRadius: t.radius([
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ]),

  borderLeftRadius: t.radius(['borderTopLeftRadius', 'borderBottomLeftRadius']),

  borderRightRadius: t.radius([
    'borderTopRightRadius',
    'borderBottomRightRadius',
  ]),
};

Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle,
});

/**
 * The prop types for border properties listed above
 */
export interface BorderProps {
  /**
   * The CSS `border` property
   */
  border?: Border | number;
  /**
   * The CSS `border-width` property
   */
  borderWidth?: BorderWidth | number;
  /**
   * The CSS `border-style` property
   */
  borderStyle?: BorderStyle;
  /**
   * The CSS `border-color` property
   */
  borderColor?: BorderTopColor;
  /**
   * The CSS `border-radius` property
   */
  borderRadius?: BorderRadius | number;
  /**
   * The CSS `border-radius` property
   */
  rounded?: BorderRadius | number;
  /**
   * The CSS `border-top` property
   */
  borderTop?: BorderTop | number;
  borderBlockStart?: BorderBlockStart | number;
  /**
   * The CSS `border-top-width` property
   */
  borderTopWidth?: BorderWidth | number;
  borderBlockStartWidth?: BorderBlockStartWidth | number;
  /**
   * The CSS `border-bottom-width` property
   */
  borderBottomWidth?: BorderWidth | number;
  borderBlockEndWidth?: BorderBlockEndWidth | number;
  /**
   * The CSS `border-left-width` property
   */
  borderLeftWidth?: BorderWidth | number;
  borderStartWidth?: BorderWidth | number;
  borderInlineStartWidth?: BorderInlineStartWidth | number;
  /**
   * The CSS `border-right-width` property
   */
  borderRightWidth?: BorderWidth | number;
  borderEndWidth?: BorderWidth | number;
  borderInlineEndWidth?: BorderInlineEndWidth | number;
  /**
   * The CSS `border-top-style` property
   */
  borderTopStyle?: BorderTopStyle;
  borderBlockStartStyle?: BorderBlockStartStyle;
  /**
   * The CSS `border-bottom-style` property
   */
  borderBottomStyle?: BorderBottomStyle;
  borderBlockEndStyle?: BorderBlockEndStyle;
  /**
   * The CSS `border-left-style` property
   */
  borderLeftStyle?: BorderLeftStyle;
  borderStartStyle?: BorderInlineStartStyle;
  borderInlineStartStyle?: BorderInlineStartStyle;
  /**
   * The CSS `border-right-styles` property
   */
  borderRightStyle?: BorderRightStyle;
  borderEndStyle?: BorderInlineEndStyle;
  borderInlineEndStyle?: BorderInlineEndStyle;
  /**
   * The CSS `border-top-color` property
   */
  borderTopColor?: BorderTopColor;
  borderBlockStartColor?: BorderBlockStartColor;
  /**
   * The CSS `border-bottom-color` property
   */
  borderBottomColor?: BorderBottomColor;
  borderBlockEndColor?: BorderBlockEndColor;
  /**
   * The CSS `border-left-color` property
   */
  borderLeftColor?: BorderLeftColor;
  borderStartColor?: BorderInlineStartColor;
  borderInlineStartColor?: BorderInlineStartColor;
  /**
   * The CSS `border-right-color` property
   */
  borderRightColor?: BorderRightColor;
  borderEndColor?: BorderInlineEndColor;
  borderInlineEndColor?: BorderInlineEndColor;
  /**
   * The CSS `border-right` property
   */
  borderRight?: BorderRight | number;

  borderEnd?: BorderInlineStart | number;
  borderInlineEnd?: BorderInlineEnd | number;
  /**
   * The CSS `border-bottom` property
   */
  borderBottom?: BorderBottom | number;

  borderBlockEnd?: BorderBlockEnd | number;
  /**
   * The CSS `border-left` property
   */
  borderLeft?: BorderLeft | number;
  borderStart?: BorderInlineStart | number;
  borderInlineStart?: BorderInlineStart | number;
  /**
   * The CSS `border-top-radius` property
   */
  borderTopRadius?: BorderRadius | number;
  /**
   * The CSS `border-top-radius` property
   */
  roundedTop?: BorderRadius | number;
  /**
   * The CSS `border-right-radius` property
   */
  borderRightRadius?: BorderRadius | number;
  /**
   * The CSS `border-right-radius` property
   */
  roundedRight?: BorderRadius | number;
  /**
   * When direction is `ltr`, `roundedEnd` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `roundedEnd` is equivalent to `borderLeftRadius`.
   */
  roundedEnd?: BorderRadius | number;
  /**
   * When direction is `ltr`, `borderInlineEndRadius` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `borderInlineEndRadius` is equivalent to `borderLeftRadius`.
   */
  borderInlineEndRadius?: BorderRadius | number;
  /**
   * When direction is `ltr`, `borderEndRadius` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `borderEndRadius` is equivalent to `borderLeftRadius`.
   */
  borderEndRadius?: BorderRadius | number;
  /**
   * The CSS `border-bottom-radius` property
   */
  borderBottomRadius?: BorderRadius | number;
  /**
   * The CSS `border-bottom-radius` property
   */
  roundedBottom?: BorderRadius | number;
  /**
   * The CSS `border-left-radius` property
   */
  borderLeftRadius?: BorderRadius | number;
  /**
   * The CSS `border-left-radius` property
   */
  roundedLeft?: BorderRadius | number;
  /**
   * When direction is `ltr`, `roundedEnd` is equivalent to `borderRightRadius`.
   * When direction is `rtl`, `roundedEnd` is equivalent to `borderLeftRadius`.
   */
  roundedStart?: BorderRadius | number;
  /**
   * When direction is `ltr`, `borderInlineStartRadius` is equivalent to `borderLeftRadius`.
   * When direction is `rtl`, `borderInlineStartRadius` is equivalent to `borderRightRadius`.
   */
  borderInlineStartRadius?: BorderRadius | number;
  /**
   * When direction is `ltr`, `borderStartRadius` is equivalent to `borderLeftRadius`.
   * When direction is `rtl`, `borderStartRadius` is equivalent to `borderRightRadius`.
   */
  borderStartRadius?: BorderRadius | number;
  /**
   * The CSS `border-top-left-radius` property
   */
  borderTopLeftRadius?: BorderRadius | number;
  borderTopStartRadius?: BorderRadius | number;

  /**
   * The CSS `border-top-left-radius` property
   */
  roundedTopLeft?: BorderRadius | number;
  roundedTopStart?: BorderRadius | number;
  /**
   * The CSS `border-top-right-radius` property
   */
  borderTopRightRadius?: BorderRadius | number;
  borderTopEndRadius?: BorderRadius | number;

  /**
   * The CSS `border-top-right-radius` property
   */
  roundedTopRight?: BorderRadius | number;
  roundedTopEnd?: BorderRadius | number;
  /**
   * The CSS `border-bottom-left-radius` property
   */
  borderBottomLeftRadius?: BorderRadius | number;
  borderBottomStartRadius?: BorderRadius | number;

  /**
   * The CSS `border-bottom-left-radius` property
   */
  roundedBottomLeft?: BorderRadius | number;
  roundedBottomStart?: BorderRadius | number;
  /**
   * The CSS `border-bottom-right-radius` property
   */
  borderBottomRightRadius?: BorderRadius | number;
  borderBottomEndRadius?: BorderRadius | number;
  borderEndEndRadius?: BorderEndEndRadius | number;
  /**
   * The CSS `border-bottom-right-radius` property
   */
  roundedBottomRight?: BorderRadius | number;
  roundedBottomEnd?: BorderRadius | number;
  /**
   * The CSS `border-right` and `border-left` property
   */
  borderX?: Border | number;
  borderInline?: BorderInline | number;
  /**
   * The CSS `border-top` and `border-bottom` property
   */
  borderY?: Border | number;
  borderBlock?: BorderBlock | number;
}
