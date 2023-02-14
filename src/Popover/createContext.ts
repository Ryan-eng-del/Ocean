import { Placement, UseFloatingReturn } from '@floating-ui/react';
import { createContext } from 'Ocean/hooks/useContext';

interface PopoverContext {
  placement?: Placement;
  floating?: UseFloatingReturn;
  open?: boolean;
}

export const [PopoverProvider, usePopoverContext] =
  createContext<PopoverContext>();
