import { ButtonType } from 'Ocean/Button';
import { createContext } from 'Ocean/hooks/useContext';
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
export const [RadioProvider, useRadioContext] = createContext<RadioContext>();
