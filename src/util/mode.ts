import { ColorSchema } from '../CSS-System/theme/colors';
import { ColorMode } from '../System/colorMode';
import { StyleProps } from '../System/system.type';
export function mode(dark: any, light: any, mode: ColorMode['initialMode']) {
  return mode === 'dark' ? dark : light;
}

export interface modeProps {
  curMode: ColorMode['initialMode'];
  colorSchema: ColorSchema | undefined;
}

export function changeMode(mode: modeProps) {
  return function (funOrObj: StyleProps | ((props: any) => StyleProps)) {
    if (typeof funOrObj === 'function') {
      return funOrObj(mode);
    } else {
      return funOrObj;
    }
  };
}
