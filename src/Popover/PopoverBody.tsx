import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';

interface PopoverBody {}
interface PopoverBodyProps extends OceanComponent<'div', PopoverBody> {}

const PopoverBody = (props: PopoverBodyProps) => {
  const {} = props;
  const baseStyle: StyleProps = {
    p: 3,
  };

  return (
    <ocean.div
      {...props}
      __css={baseStyle}
      className={cx('ocean-divider-text', props.className)}
    ></ocean.div>
  );
};
export default PopoverBody;
