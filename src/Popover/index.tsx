import {
  arrow,
  offset,
  Placement,
  shift,
  useFloating,
} from '@floating-ui/react';
import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React, { useRef } from 'react';
import { PopoverProvider } from './createContext';

export interface Popover {
  placement?: Placement;
  open?: boolean;
}

interface PopoverProps extends OceanComponent<'div', Popover> {}

const Popover = (props: PopoverProps) => {
  const { placement = 'bottom', open } = props;
  const baseStyle: StyleProps = {};

  // Inside your component
  const arrowRef = useRef(null);

  const floating = useFloating({
    placement,
    middleware: [
      offset(10),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  return (
    <PopoverProvider value={{ placement, floating, open, arrowRef }}>
      <ocean.div
        {...props}
        __css={baseStyle}
        className={cx('ocean-popover', props.className)}
      />
    </PopoverProvider>
  );
};
export default Popover;
