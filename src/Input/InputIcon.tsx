import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React, { forwardRef } from 'react';

interface InputIcon {
  placement: 'left' | 'right';
}
interface InputIconProps extends OceanComponent<'div', InputIcon> {}

const InputIcon = forwardRef<any, InputIconProps>((props, ref) => {
  const { placement } = props;

  const placementStyle = {
    left: {
      top: 0,
      left: 0,
    },
    right: {
      top: 0,
      right: 0,
    },
  };
  const baseStyle: StyleProps = {
    pos: 'absolute',
    display: 'flex',
    align: 'center',
    justify: 'center',
    boxSize: 12,
    ...placementStyle[placement],
  };

  return (
    <ocean.div
      {...props}
      ref={ref}
      __css={baseStyle}
      className={cx('ocean-divider-text', props.className)}
    ></ocean.div>
  );
});

export default InputIcon;

const InputLeftIcon = forwardRef<any, Omit<InputIconProps, 'placement'>>(
  (props, ref) => {
    return (
      <InputIcon className="left-addon" placement="left" ref={ref} {...props} />
    );
  },
);

InputLeftIcon.displayName = 'InputLeftIcon';

const InputRightIcon = forwardRef<any, Omit<InputIconProps, 'placement'>>(
  (props, ref) => {
    return (
      <InputIcon
        className="right-addon"
        ref={ref}
        placement="right"
        {...props}
      />
    );
  },
);

InputRightIcon.displayName = 'InputRightIcon';

export {
  InputLeftIcon as InputLeftElement,
  InputRightIcon as InputRightElement,
};
