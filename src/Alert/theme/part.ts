import { defineStyle } from 'Ocean/Style-System/defineStyle';

// ============= part ==================
const iconBaseStyle = defineStyle({
  fontSize: 'xl',
  paddingRight: 3,
});

const icon = {
  info: defineStyle({
    c: 'blue.600',
    ...iconBaseStyle,
  }),

  success: defineStyle({
    c: 'green.600',
    ...iconBaseStyle,
  }),

  warning: defineStyle({
    c: 'orange.600',
    ...iconBaseStyle,
  }),

  error: defineStyle({
    c: 'red.600',
    ...iconBaseStyle,
  }),
};

export const part = {
  icon,
};
