import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import React from 'react';
import { usePopoverContext } from './createContext';
import PopoverTransition from './PopoverAnimated';

interface PopoverContent {}
interface PopoverContentProps extends OceanComponent<'div', PopoverContent> {}

const PopoverContent = (props: PopoverContentProps) => {
  const { children, ...restProps } = props;

  const popoverProps = usePopoverContext();
  const baseStyle: StyleProps = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'md',
    boxShadow: 'sm',
    visibility: popoverProps.open ? 'visible' : 'hidden',
    bg: '#fff',
    rounded: 'lg',
    zIndex: 20,
  };

  return (
    <ocean.div
      __css={baseStyle}
      ref={popoverProps.floating?.refs.setFloating}
      {...restProps}
      style={{
        position: popoverProps.floating?.strategy,
        top: popoverProps?.floating?.y ?? 0,
        left: popoverProps?.floating?.x ?? 0,
        width: 'max-content',
      }}
      className={'ocean-popover-content'}
    >
      <PopoverTransition>{children}</PopoverTransition>
    </ocean.div>
  );
};
export default PopoverContent;
