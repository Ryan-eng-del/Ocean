import { generateStyleToken as GST } from '../utils/index';
import { Background, BackgroundColor, Color as ColorType } from './css.type';

export const Color = {
  color: GST.colors('color'),
  backgroundColor: GST.colors('backgroundColor'),
  background: GST.colors('background'),
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
