import { defineStyle } from '../../Style-System/defineStyle';

const baseStyle = defineStyle({
  display: 'flex',
  padding: 2,
  rounded: 'md',
  align: 'center',
  c: 'zinc.800',
  transition: 'all 110ms ease',
});

// ============= variant==================
const info = defineStyle({
  bg: 'blue.100',
});

const success = defineStyle({
  bg: 'whatsapp.100',
});

const warning = defineStyle({
  bg: 'orange.100',
});

const error = defineStyle({
  bg: 'red.100',
});

const loading = defineStyle({
  bg: 'gray.100',
});

const variant = { info, success, warning, error, loading };

// ============= part ==================
const iconBaseStyle = defineStyle({
  fontSize: 'xl',
  paddingRight: 3,
});
const icon = {
  info: defineStyle({
    c: 'blue.500',
    ...iconBaseStyle,
  }),

  success: defineStyle({
    c: 'whatsapp.600',
    ...iconBaseStyle,
  }),

  warning: defineStyle({
    c: 'orange.500',
    ...iconBaseStyle,
  }),

  error: defineStyle({
    c: 'red.500',
    ...iconBaseStyle,
  }),
};

const part = {
  icon,
};

export { variant, baseStyle, part };
