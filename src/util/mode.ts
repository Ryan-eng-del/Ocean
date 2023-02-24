import { ColorMode } from '../System/colorMode';
import { StyleProps } from '../System/system.type';
export function mode(dark: any, light: any, mode: ColorMode['initialMode']) {
  return mode === 'dark' ? dark : light;
}
export function changeMode(mode: ColorMode['initialMode']) {
  return function (funOrObj: StyleProps | ((props: any) => StyleProps)) {
    if (typeof funOrObj === 'function') {
      return funOrObj(mode);
    } else {
      return funOrObj;
    }
  };
}
