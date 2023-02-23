import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent, StyleProps } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
import React from 'react';

interface PopoverFooter {}
interface PopoverFooterProps extends OceanComponent<'div', PopoverFooter> {}

const PopoverFooter = (props: PopoverFooterProps) => {
  const {} = props;
  const baseStyle: StyleProps = {
    p: 3,
  };

  return (
    <ocean.div
      {...props}
      __css={baseStyle}
      className={cx('ocean-popover-footer', props.className)}
    ></ocean.div>
  );
};
export default PopoverFooter;
