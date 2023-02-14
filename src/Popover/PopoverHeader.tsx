import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';

interface PopoverHeader {}
interface PopoverHeaderProps extends OceanComponent<'div', PopoverHeader> {}

const PopoverHeader = (props: PopoverHeaderProps) => {
  const {} = props;

  const baseStyle: StyleProps = {
    borderBottom: '1px',
    p: 3,
    border: '1px',
    borderColor: 'gray.200',
  };

  return (
    <ocean.div
      {...props}
      __css={baseStyle}
      className={cx('ocean-popover-header', props.className)}
    ></ocean.div>
  );
};
export default PopoverHeader;
