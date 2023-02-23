import { defineStyle } from '../../Style-System/defineStyle';
import { transforms } from '../util';

const baseStyle = defineStyle({});

const animated = (placement: keyof typeof transforms) => {
  return defineStyle({
    transformOrigin: transforms[placement || 'bottom-center'],
  });
};

export { baseStyle, animated };
