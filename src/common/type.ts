import { tuple } from 'Ocean/util/type';

const SizeType = tuple('large', 'small', 'medium');

export type SizeType = (typeof SizeType)[number];
export type DirectionType = 'horizontal' | 'vertical';

export type AlignType = 'left' | 'right' | 'top' | 'bottom';

export type DividerAlign = 'left' | 'right' | 'center';
export type PxType = string | number;

export type IsType = boolean | undefined;

export type MessageType = 'info' | 'success' | 'warning' | 'error';

export type MessagePosition =
  | 'topLeft'
  | 'topCenter'
  | 'bottomLeft'
  | 'bottomCenter';

export type SwitchType = 'custom' | 'primary' | 'ios' | 'light';
export type TabType = 'line' | 'text' | 'round' | 'card';

export interface CommonType {
  ref?: any;
}
