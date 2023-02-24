import { createContext } from '@cyan-ocean/ui/hooks/useContext';
interface ModalContext {
  visible: boolean;
  cancel: () => void;
  scrollBehavior: 'inside' | 'outside';
}

export const [ModalProvider, useModalContext] = createContext<ModalContext>();
