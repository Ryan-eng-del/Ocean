import { defineStyle } from '@cyan-ocean/ui/Style-System/defineStyle';

export const sizes = {
  xs: defineStyle({
    boxSize: '3',
  }),
  sm: defineStyle({
    boxSize: '4',
  }),
  md: defineStyle({
    boxSize: '6',
  }),
  lg: defineStyle({
    boxSize: '8',
  }),
  xl: defineStyle({
    boxSize: '12',
  }),
};

export const spinnerTheme = {
  sizes,
};
