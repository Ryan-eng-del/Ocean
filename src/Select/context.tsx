import { createContext } from 'react';
import { Updater } from 'use-immer';
interface SelectContext {
  selectValue?: { value: any; curValue: any };
  setSelectValue?: Updater<{
    value: any;
    curValue: any;
  }>;
}

const SelectContext = createContext<SelectContext | null>(null);

export default SelectContext;
