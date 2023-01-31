import { generateStyleToken as GST } from '../utils/index';

export const interactivity = {
  appearance: GST.prop('appearance'),
  cursor: GST.prop('cursor'),
  resize: GST.prop('resize'),
  userSelect: GST.prop('userSelect'),
  pointerEvents: GST.prop('pointerEvents'),
  outline: GST.prop('outline'),
  outlineOffset: GST.prop('outlineOffset'),
  outlineColor: GST.prop('outlineColor'),
};
