import { generateStyleToken as GST } from '../utils/index';

export const SizeAndLayout = {
  width: GST.prop('width'),
  height: GST.prop('height'),
  minWidth: GST.prop('minWidth'),
  maxWidth: GST.prop('maxWidth'),
  minHeight: GST.prop('minHeight'),
  maxHeight: GST.prop('maxHeight'),
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
  w?: string;
  h?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  display?: string;
  min_w?: string;
  max_w?: string;
  min_h?: string;
  max_h?: string;
}
