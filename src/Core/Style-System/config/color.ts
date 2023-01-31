import { generateStyleToken as GST } from '../utils/index';
import { Background, BackgroundColor, Color as ColorType } from './css.type';

export const Color = {
  color: GST.prop('color'),
  backgroundColor: GST.prop('background-color'),
  background: GST.prop('background'),
};

Object.assign(Color, {
  bg: Color.backgroundColor,
  c: Color.color,
  bgColor: Color.backgroundColor,
});

export interface ColorProps {
  c?: ColorType;
  backgroundColor?: BackgroundColor;
  bg?: Background;
  color?: ColorType;
  bgColor?: BackgroundColor;
}
