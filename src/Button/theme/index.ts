import { mode } from '@cyan-ocean/ui/util/mode';
import { defineStyle } from '../../Style-System/defineStyle';
import { ColorMode } from '../../System/colorMode';
import { modeProps } from '../../util/mode';

const baseStyle = defineStyle((props: modeProps) => {
  return {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    align: 'center',
    justify: 'center',
    h: '43px',
    c: mode('#000', '#fff', props.curMode),
    bg: props.colorSchema ? `${props.colorSchema}.500` : '#fff',
    overflow: 'hidden',
    fontWeight: 'medium',
    fontSize: 'md',
    letterSpacing: 'wide',
    borderRadius: 'md',
    cursor: 'pointer',
    border: 0,
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  };
});

// =============== type ===================
const primary = defineStyle((curMode: ColorMode['initialMode']) => {
  return {
    bg: mode('blue.300', 'blue.600', curMode),
    _hover: {
      bg: 'rgb(21, 101, 192)',
      boxShadow:
        'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px,rgb(0 0 0 / 12%) 0px 1px 10px 0px ',
    },
  };
});

const gradual = defineStyle({
  backgroundImage: 'linear-gradient(140deg, #6cc7ff 0%, #5a33ff 100%)',
  _hover: {
    bg: 'linear-gradient(140deg, #89d9ff 0%, #6c4aff 100%)',
  },
});

const outline = defineStyle({
  border: '1px',
  borderColor: 'blue.400',
  color: 'blue.600',
  _hover: {
    bg: 'rgb(246, 250, 253)',
  },
});

const text = defineStyle((props: modeProps) => {
  return {
    color: props.colorSchema ? '#fff' : 'blue.600',
    _hover: {
      bg: props.colorSchema ? `${props.colorSchema}.600` : 'rgb(246, 250, 253)',
    },
  };
});

const danger = defineStyle({
  border: '1px',
  borderColor: 'red.500',
  color: 'red.500',
  _hover: {
    bg: 'red.50',
  },
});

const variant = { primary, gradual, outline, danger, text };

// =============== size ===================

const small = defineStyle({
  paddingX: 1.5,
  paddingY: 0,
});

const medium = defineStyle({
  paddingX: 4,
  paddingY: 1,
});

const large = defineStyle({
  paddingX: 7,
  paddingY: 2.5,
});

const size = {
  small,
  large,
  medium,
};

const loadingStyle = (loading: boolean) => {
  return (
    loading &&
    defineStyle({
      cursor: 'not-allowed',
    })
  );
};

// ============ over ===========
export { baseStyle, variant, size, loadingStyle };
