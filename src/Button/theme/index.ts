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

  overflow: 'hidden',
  fontWeight: 'medium',
  fontSize: 'sm',
  letterSpacing: 'normal',
  borderRadius: 'md',
  cursor: 'pointer',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
});

const primary = defineStyle({
  bg: 'blue.600',
});

const variant = { primary };

export { baseStyle, variant };
