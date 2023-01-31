import { generateStyleToken as GST } from '../utils/index';
import { Bottom, Left, Position, Right, Top, ZIndex } from './css.type';
export const position = {
  position: GST.prop('position'),
  pos: GST.prop('position'),
  zIndex: GST.prop('zIndex'),
  top: GST.prop('top'),
  bottom: GST.prop('bottom'),
  left: GST.prop('left'),
  right: GST.prop('right'),
};

export interface PositionProps {
  position?: Position;
  pos?: Position;
  zIndex?: ZIndex;
  top?: Top;
  bottom?: Bottom;
  left?: Left;
  right?: Right;
}
