import { StyleProps } from '../System/system.type';

export const defineStyle = (
  styles: StyleProps | ((props: any) => StyleProps),
): StyleProps | ((props: any) => StyleProps) => {
  return styles;
};
