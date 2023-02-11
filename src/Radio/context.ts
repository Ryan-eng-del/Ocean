import { ButtonType } from '../Button';
import { SizeType } from '../common/type';
import { createContext } from '../hooks/useContext';
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
