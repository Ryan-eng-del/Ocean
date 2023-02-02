import { generateStyleToken as GST } from '../utils/index';
import {
  Border,
  BorderBottom,
  BorderBottomColor,
  BorderBottomLeftRadius,
  BorderBottomRightRadius,
  BorderBottomStyle,
  BorderBottomWidth,
  BorderColor,
  BorderLeft,
  BorderLeftColor,
  BorderLeftStyle,
  BorderLeftWidth,
  BorderRadius,
  BorderRight,
  BorderRightColor,
  BorderRightStyle,
  BorderRightWidth,
  BorderStyle,
  BorderTop,
  BorderTopColor,
  BorderTopLeftRadius,
  BorderTopStyle,
  BorderTopWidth,
  BorderWidth,
} from './css.type';

export const border = {
  border: GST.prop('border'),
  borderWidth: GST.prop('borderWidth'),
  borderStyle: GST.prop('borderStyle'),
  borderColor: GST.colors('borderColor'),
  borderRadius: GST.prop('borderRadius'),
  borderTop: GST.prop('borderTop'),
  borderTopLeftRadius: GST.prop('borderTopLeftRadius'),
  borderRight: GST.prop('borderRight'),
  borderBottom: GST.prop('borderBottom'),
  borderBottomLeftRadius: GST.prop('borderBottomLeftRadius'),
  borderBottomRightRadius: GST.prop('borderBottomRightRadius'),
  borderLeft: GST.prop('borderLeft'),
  borderTopWidth: GST.prop('borderTopWidth'),
  borderTopColor: GST.colors('borderTopColor'),
  borderTopStyle: GST.prop('borderTopStyle'),

  borderBottomWidth: GST.prop('borderBottomWidth'),
  borderBottomColor: GST.prop('borderBottomColor'),
  borderBottomStyle: GST.prop('borderBottomStyle'),
  borderLeftWidth: GST.prop('borderLeftWidth'),
  borderLeftColor: GST.colors('borderLeftColor'),
  borderLeftStyle: GST.prop('borderLeftStyle'),
  borderRightWidth: GST.prop('borderRightWidth'),
  borderRightColor: GST.colors('borderRightColor'),
  borderRightStyle: GST.prop('borderRightStyle'),
};

export interface BorderProps {
  Border?: Border;
  BorderWidth?: BorderWidth;
  BorderStyle?: BorderStyle;
  BorderColor?: BorderColor;
  BorderRadius?: BorderRadius;
  BorderTop?: BorderTop;
  BorderTopLeftRadius?: BorderTopLeftRadius;
  BorderRight?: BorderRight;
  BorderBottom?: BorderBottom;
  BorderBottomLeftRadius?: BorderBottomLeftRadius;
  BorderBottomRightRadius?: BorderBottomRightRadius;
  BorderLeft?: BorderLeft;
  BorderTopWidth?: BorderTopWidth;
  BorderTopColor?: BorderTopColor;
  BorderTopStyle?: BorderTopStyle;
  BorderBottomWidth?: BorderBottomWidth;
  BorderBottomColor?: BorderBottomColor;
  BorderBottomStyle?: BorderBottomStyle;
  BorderLeftWidth?: BorderLeftWidth;
  BorderLeftColor?: BorderLeftColor;
  BorderLeftStyle?: BorderLeftStyle;
  BorderRightWidth?: BorderRightWidth;
  BorderRightColor?: BorderRightColor;
  BorderRightStyle?: BorderRightStyle;
}
