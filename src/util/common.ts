import { PxType } from 'Ocean/common/type';

export const handlePx = (size: PxType) => {
  let value = size;
  if (typeof size === 'number') {
    value = `${size}px`;
  } else if (typeof size === 'string') {
    value = size;
  }
  return value;
};

export const isNoPass = <T>(value: undefined | T): value is undefined => {
  return value === undefined;
};
