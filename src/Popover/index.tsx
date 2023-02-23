import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent, StyleProps } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
import {
  arrow,
  offset,
  Placement,
  shift,
  useFloating,
} from '@floating-ui/react';
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
