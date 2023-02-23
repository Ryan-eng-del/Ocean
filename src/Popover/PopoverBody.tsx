import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent, StyleProps } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
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
      className={cx('ocean-popover-body', props.className)}
    ></ocean.div>
  );
};
export default PopoverBody;
