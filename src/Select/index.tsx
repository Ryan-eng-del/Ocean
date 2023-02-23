import { ocean } from '@cyan-ocean/ui';
import { InputType } from '@cyan-ocean/ui/Input/Input';
import {
  baseStyle,
  dimensions,
  variantStyle,
} from '@cyan-ocean/ui/Input/theme';
import { OceanComponent, StyleProps } from '@cyan-ocean/ui/System/system.type';
import React, { forwardRef } from 'react';

interface Select {
  variant?: 'unstyle' | 'outline' | 'underline';
  size?: InputType;
}
interface SelectProps extends OceanComponent<'select', Select> {}

const Select = forwardRef<any, SelectProps>((props, ref) => {
  const {
    size = 'md',
    variant = 'outline',
    children,
    placeholder,
    ...restProps
  } = props;

  //toDo 抽象封装成 Hook useMultiplyStyle
  const baseInputStyle: StyleProps = {
    flex: '1',
    ...baseStyle,
    ...dimensions[size],
    ...(variant !== 'outline' && variantStyle[variant]),
  };

  return (
    <ocean.select ref={ref} __css={baseInputStyle} {...restProps}>
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </ocean.select>
  );
});

export default Select;
