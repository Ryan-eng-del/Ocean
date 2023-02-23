import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent, StyleProps } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
import React, { forwardRef } from 'react';
import { baseStyle, dimensions, variantStyle } from './theme';
export type InputType = 'lg' | 'md' | 'sm' | 'xs';

interface Input {
  variant?: 'unstyle' | 'outline' | 'underline';
}

export interface InputProps
  extends Omit<OceanComponent<'input', Input>, 'size'> {
  size?: InputType;
}

const Input = forwardRef<any, InputProps>((props: InputProps, ref) => {
  const { size = 'md', variant = 'outline', ...restProps } = props;

  //toDo 抽象封装成 Hook useMultiplyStyle
  const baseInputStyle: StyleProps = {
    flex: '1',
    ...baseStyle,
    ...dimensions[size],
    ...(variant !== 'outline' && variantStyle[variant]),
  };

  return (
    <ocean.input
      ref={ref}
      {...restProps}
      __css={baseInputStyle}
      className={cx('ocean-divider-text', props.className)}
    />
  );
});

Input.displayName = 'Input';
export default Input;
