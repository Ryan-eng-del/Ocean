import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React, { forwardRef } from 'react';

interface InputAddon {
  placement: 'left' | 'right';
}
interface InputAddonProps extends OceanComponent<'div', InputAddon> {}

const InputAddon = forwardRef<any, InputAddonProps>((props, ref) => {
  const { placement, ...restProps } = props;

  const placementStyle = {
    left: {
      borderLeftRadius: 'lg',
    },
    right: {
      borderRightRadius: 'lg',
    },
  };

  const baseStyle: StyleProps = {
    bg: 'gray.200',
    c: 'slate.600',
    display: 'flex',
    align: 'center',
    px: 3,
    ...placementStyle[placement],
  };

  return (
    <ocean.div
      ref={ref}
      __css={baseStyle}
      className={cx('ocean-divider-text', props.className)}
      {...restProps}
    ></ocean.div>
  );
});

const InputLeftAddon = forwardRef<
  InputAddonProps,
  Omit<InputAddonProps, 'placement'>
>((props, ref) => {
  return (
    <InputAddon className="left-addon" placement="left" ref={ref} {...props} />
  );
});

InputLeftAddon.displayName = 'InputLeftAddon';

const InputRightAddon = forwardRef<
  InputAddonProps,
  Omit<InputAddonProps, 'placement'>
>((props, ref) => {
  return (
    <InputAddon
      className="right-addon"
      ref={ref}
      placement="right"
      {...props}
    />
  );
});

//toDo 补充类型定义
InputRightAddon.displayName = 'InputRightAddon';

export { InputLeftAddon, InputRightAddon };
