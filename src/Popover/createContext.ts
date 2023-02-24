import { createContext } from '@cyan-ocean/ui/hooks/useContext';
import { Placement, UseFloatingReturn } from '@floating-ui/react';

interface PopoverContext {
  placement?: Placement;
  floating?: UseFloatingReturn;
  open?: boolean;
  arrowRef?: any;
}

export const [PopoverProvider, usePopoverContext] =
  createContext<PopoverContext>();
