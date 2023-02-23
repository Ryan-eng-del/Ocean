import { AlignType } from '@cyan-ocean/ui/common/type';
import { createContext } from '@cyan-ocean/ui/hooks/useContext';
interface DrawerContext {
  visible: boolean;
  placement?: AlignType;
  cancel: () => void;
}

export const [DrawerProvider, useDrawerContext] =
  createContext<DrawerContext>();
