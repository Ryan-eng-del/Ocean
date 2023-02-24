import { ocean } from '@cyan-ocean/ui';
import { keyframes } from '@emotion/react';
import React, { forwardRef } from 'react';
import { OceanComponent, StyleProps } from '../System/system.type';
import { sizes, spinnerTheme } from './theme';
interface Spinner {
  thickness?: string;
  emptyColor?: string;
  spin?: number;
  speed?: string;
  size?: keyof typeof sizes;
}

const spinIn = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

interface SpinnerProps extends OceanComponent<'div', Spinner> {}

const Spinner = forwardRef<any, SpinnerProps>((props, ref) => {
  const {
    thickness,
    emptyColor,
    spin = spinIn,
    speed = '0.45s',
    size = 'md',
    ...restProps
  } = props;

  const spinnerStyles: StyleProps = {
    display: 'inline-block',
    borderColor: 'blue.500',
    borderStyle: 'solid',
    borderRadius: '50%',
    borderWidth: thickness || '4px',
    borderBottomColor: emptyColor || 'gray.300',
    borderLeftColor: emptyColor || 'gray.300',
    animation: `${spin} ${speed} linear infinite`,
    ...spinnerTheme.sizes[size],
  };

  return <ocean.div ref={ref} {...restProps} __css={spinnerStyles}></ocean.div>;
});

export default Spinner;
