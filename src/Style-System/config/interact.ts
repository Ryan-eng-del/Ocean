import { Cursor, PointerEvents, Transform } from './css.type';
const interact = {
  cursor: true,
  pointerEvents: true,
  transform: true,
  animation: true,
};

export interface InteractProps {
  cursor?: Cursor;
  pointerEvents?: PointerEvents;
  transform?: Transform;
}

export default interact;
