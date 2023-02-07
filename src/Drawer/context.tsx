import { AlignType } from 'Ocean/common/type';
import { createContext } from 'Ocean/hooks/useContext';
interface DrawerContext {
  visible: boolean;
  placement?: AlignType;
  cancel: () => void;
}

export const [DrawerProvider, useDrawerContext] =
  createContext<DrawerContext>();
