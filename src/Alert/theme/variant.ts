import { defineStyle } from '../../Style-System/defineStyle';

const solid = (colorSchema: string) => {
  return defineStyle({
    c: '#fff',
    bg: `${colorSchema}.500`,
  });
};

const leftLine = (colorSchema: string) => {
  return defineStyle({
    borderLeft: '4px',
    borderColor: `${colorSchema}.500`,
  });
};

const bottomLine = (colorSchema: string) => {
  return defineStyle({
    borderBottom: '4px',
    borderColor: `${colorSchema}.500`,
  });
};

const TopLine = (colorSchema: string) => {
  return defineStyle({
    borderTop: '4px',
    borderColor: `${colorSchema}.500`,
  });
};

export const variantStyle = {
  solid,
  'left-line': leftLine,
  'top-line': TopLine,
  'bottom-line': bottomLine,
};
