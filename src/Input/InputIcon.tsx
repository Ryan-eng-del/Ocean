import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';

interface InputIcon {}
interface InputIconProps extends OceanComponent<'div', InputIcon> {}

const InputIcon = (props: InputIconProps) => {
  const {} = props;
  const baseStyle: StyleProps = {};
  return (
    <ocean.div
      {...props}
      __css={baseStyle}
      className={cx('ocean-divider-text', props.className)}
    ></ocean.div>
  );
};

export default InputIcon;
