import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';
import { usePopoverContext } from './createContext';

interface PopoverTrigger {}
interface PopoverTriggerProps extends OceanComponent<'div', PopoverTrigger> {}

const PopoverTrigger = (props: PopoverTriggerProps) => {
  const {} = props;
  const { floating } = usePopoverContext();
  const baseStyle: StyleProps = {
    position: 'relative',
    display: 'inline-flex',
  };

  return (
    <ocean.div
      {...props}
      __css={baseStyle}
      ref={floating?.refs.setReference}
      className={cx('ocean-popover-trigger', props.className)}
    ></ocean.div>
  );
};
export default PopoverTrigger;
