import { Color as ColorType } from './css.type';
import { generateStyleToken as t } from './utils/index';

export const Color = {
  color: t.colors('color'),
  textColor: t.colors('color'),
  fill: t.colors('fill'),
  stroke: t.colors('stroke'),
};

Object.assign(Color, {
  c: Color.color,
});

export interface ColorProps {
  c?: ColorType;
  textColor?: ColorType;
  /**
   * The CSS `color` property
   */
  color?: ColorType;
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: ColorType;
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: ColorType;
}
