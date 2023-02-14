import { Cursor, PointerEvents, Transform, TransformOrigin } from './css.type';
const interact = {
  cursor: true,
  pointerEvents: true,
  transform: true,
  animation: true,
  transformOrigin: true,
};

export interface InteractProps {
  cursor?: Cursor;
  pointerEvents?: PointerEvents;
  transform?: Transform;
  transformOrigin?: TransformOrigin;
}

export default interact;
