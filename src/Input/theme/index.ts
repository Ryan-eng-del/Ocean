import { defineStyle } from '../../Style-System/defineStyle';

const baseStyle = defineStyle({
  borderRadius: 'lg',
  outline: 'none',
  paddingLeft: '3',
  transition: 'ease 110ms',
  width: '100%',
  _hover: {
    borderColor: 'gray.400',
  },
  _focusVisible: {
    boxShadow: 'rgb(49 130 206) 0px 0px 0px 1px',
    borderColor: 'blue.500',
  },

  boxSizing: 'border-box',
  border: '1px',
  borderColor: 'gray.300',
});

const dimensions = {
  lg: defineStyle({
    fontSize: 'lg',
    pl: '4',
    h: '12',
    borderRadius: 'md',
  }),
  md: defineStyle({
    fontSize: 'md',
    pl: '4',
    h: '10',
    borderRadius: 'md',
  }),
  sm: defineStyle({
    fontSize: 'sm',
    pl: '3',
    h: '8',
    borderRadius: 'sm',
  }),
  xs: defineStyle({
    fontSize: 'xs',
    pl: '2',
    h: '6',
    borderRadius: 'sm',
  }),
};

const unstyle = defineStyle({
  border: 'none',
  boxShadow: 'none',
  _focusVisible: {
    borderBottomColor: 'none',
    boxShadow: 'none',
  },
});

const underline = defineStyle({
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderTopColor: 'transparent',
  boxShadow: 'none',
  border: '1px',
  borderRadius: 'none',
  _hover: {
    borderBottomColor: 'gray.400',
  },
  _focusVisible: {
    borderBottomColor: 'blue.500',
    boxShadow: 'rgb(49 130 206) 0px 1px 0px 0px',
  },
});

const variant = { unstyle, underline };
export { baseStyle, dimensions, variant as variantStyle };
