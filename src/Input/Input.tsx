import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';
import { baseStyle, dimensions, variantStyle } from './theme';
type InputType = 'lg' | 'md' | 'sm' | 'xs';

interface Input {
  variant?: 'unstyle' | 'outline' | 'underline';
}

interface InputProps extends Omit<OceanComponent<'input', Input>, 'size'> {
  size?: InputType;
}

const Input = (props: InputProps) => {
  const { size = 'md', variant = 'outline', ...restProps } = props;

  const baseInputStyle: StyleProps = {
    ...baseStyle,
    ...dimensions[size],
    ...(variant !== 'outline' && variantStyle[variant]),
  };

  return (
    <ocean.input
      {...restProps}
      __css={baseInputStyle}
      className={cx('ocean-divider-text', props.className)}
    ></ocean.input>
  );
};

export default Input;
