import { createContext } from 'react';
interface TreeContext {
  select: string;
  expand: string[];
  handleExpand: (id: string) => void;
  handleSelect: (id: string) => void;
  tool?: React.ReactNode;
  mode?: 'preview' | 'interact';
}
const TreeContext = createContext<TreeContext | null>(null);

export default TreeContext;
