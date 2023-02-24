import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent, StyleProps } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
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
