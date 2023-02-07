import { defineStyle } from '../../Style-System/defineStyle';
const left = defineStyle({
  top: 0,
  left: 0,
  h: 'screenH',
});

const right = defineStyle({
  top: 0,
  right: 0,
  h: 'screenH',
});

const top = defineStyle({
  top: 0,
  left: 0,
  right: 0,
  w: 'screenW',
  h: '400px',
});

const bottom = defineStyle({
  bottom: 0,
  right: 0,
  left: 0,
  w: 'screenW',
  h: '400px',
});

const position = { top, left, right, bottom };

export { position };
