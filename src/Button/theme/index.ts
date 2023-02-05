import { defineStyle } from '../../Style-System/defineStyle';

const baseStyle = defineStyle({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  align: 'center',
  justify: 'center',
  w: '100%',
  h: '43px',
  c: '#fff',
  bg: '#fff',
  overflow: 'hidden',
  fontWeight: 'medium',
  fontSize: 'sm',
  letterSpacing: 'normal',
  borderRadius: 'md',
  cursor: 'pointer',
  border: 0,
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
});

// =============== type ===================
const primary = defineStyle({
  bg: 'blue.600',
});

const gradual = defineStyle({
  backgroundImage: 'linear-gradient(140deg, #6cc7ff 0%, #5a33ff 100%)',
});

const outline = defineStyle({
  border: '1px',
  borderColor: 'blue.600',
  color: 'blue.600',
});

const text = defineStyle({
  color: 'blue.600',
});

const danger = defineStyle({
  border: '1px',
  borderColor: 'red.500',
  color: 'red.500',
});

const variant = { primary, gradual, outline, danger, text };

// =============== size ===================

const small = defineStyle({
  paddingX: 5,
  paddingY: 0,
});

const medium = defineStyle({
  paddingX: 15,
  paddingY: 5,
});

const large = defineStyle({
  paddingX: 30,
  paddingY: 10,
});

const size = {
  small,
  large,
  medium,
};

export { baseStyle, variant, size };
