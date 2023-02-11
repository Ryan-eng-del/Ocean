import { defineStyle } from '../../Style-System/defineStyle';

const baseStyle = defineStyle({
  borderRadius: 'md',
  display: 'inline-flex',
  align: 'center',
  bg: 'blue.500',
  color: '#fff',
  justify: 'center',
  transition: 'all ease 110ms',
});

const small = defineStyle({
  minW: 5,
  minH: 5,
  fontSize: 'sm',
  px: '2',
});

const large = defineStyle({
  minH: '8',
  minW: '8',
  fontSize: 'md',
  px: '4',
});

const medium = defineStyle({
  minH: '6',
  minW: '6',
  fontSize: 'sm',
  px: '3',
});

const sizeStyle = {
  small,
  large,
  medium,
};
const closeIcon = defineStyle({
  // fontSize: 'xs',
  w: '5',
  h: '5',
  cursor: 'pointer',

  display: 'flex',
  align: 'center',
  justify: 'center',

  pl: 2,
  boxSizing: 'border-box',
  opacity: 0.5,

  _hover: {
    opacity: 0.8,
  },

  _active: {
    opacity: 1,
  },
});

const variant = {
  outline: {
    bg: '#fff',
    borderColor: 'blue.500',
    border: '2px',
    color: 'blue.500',
  },
};
export { sizeStyle, baseStyle, closeIcon, variant };
