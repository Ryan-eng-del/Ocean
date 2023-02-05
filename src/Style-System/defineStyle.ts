import { SystemProps } from 'Ocean/System/system.type';

export const defineStyle = <T extends SystemProps>(styles: T): T => {
  return styles;
};
