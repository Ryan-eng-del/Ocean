import { defineStyle } from 'Ocean/Style-System/defineStyle';

const topLeft = defineStyle({
  top: 0,
  left: 0,
});

const bottomLeft = defineStyle({
  bottom: 0,
  left: 0,
});

const topRight = defineStyle({
  top: 0,
  right: 0,
});

const bottomRight = defineStyle({
  bottom: 0,
  right: 0,
});

const top = defineStyle({
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
});

const bottom = defineStyle({
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
});

const position = {
  top,
  bottom,
  'top-left': topLeft,
  'top-right': topRight,
  'bottom-left': bottomLeft,
  'bottom-right': bottomRight,
};

export { position as positionStyle };
