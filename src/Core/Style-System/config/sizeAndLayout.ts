import { generateStyleToken as GST } from '../utils/index';
import {
  Display,
  Height,
  MaxHeight,
  MaxWidth,
  MinHeight,
  MinWidth,
  Width,
} from './css.type';

export const SizeAndLayout = {
  width: GST.sizes('width'),
  height: GST.sizes('height'),
  minWidth: GST.sizes('minWidth'),
  maxWidth: GST.sizes('maxWidth'),
  minHeight: GST.sizes('minHeight'),
  maxHeight: GST.sizes('maxHeight'),
  display: GST.prop('display'),
};

Object.assign(SizeAndLayout, {
  w: SizeAndLayout.width,
  h: SizeAndLayout.height,
  // ==== min-width ====== https://tailwindcss.com/docs/min-width
  min_w: SizeAndLayout.minWidth,
  max_w: SizeAndLayout.maxWidth,
  min_h: SizeAndLayout.minHeight,
  max_h: SizeAndLayout.maxHeight,

  //toDo 提供 css 属性值的 token
  // min_w_fit: SizeAndLayout.minWidth,
  // min_w_full: SizeAndLayout.minWidth,
  // min_w_max: SizeAndLayout.minWidth,
  // min_w_min: SizeAndLayout.minWidth,
});

export interface SizeAndLayoutProps {
  width?: Width;
  w?: Width;
  h?: Height;
  minWidth?: MinWidth;
  maxWidth?: MaxWidth;
  minHeight?: MinHeight;
  maxHeight?: MaxHeight;
  display?: Display;
  min_w?: MinWidth;
  max_w?: MaxWidth;
  min_h?: MinHeight;
  max_h?: MaxHeight;
}
