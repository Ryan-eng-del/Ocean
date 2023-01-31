import { generateStyleToken as GST } from '../utils/index';

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

export interface Color {
  c?: string;
  backgroundColor?: string;
  bg?: string;
  color?: string;
  bgColor?: string;
}
