import { ButtonType } from 'Ocean/Button';
import { createContext, useContext } from 'react';
import { SizeType } from '../common/type';
interface RadioContext {
  value: any | any[];
  onChange: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any,
    curChecked: any | any[],
  ) => void;
  size?: SizeType;
  type?: ButtonType;
  noExam?: boolean;
  solid?: boolean;
}
const RadioContext = createContext<RadioContext | null>(null);

export const useRadioContext = () => {
  return useContext(RadioContext);
};

export default RadioContext;
