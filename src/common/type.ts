import { tuple } from 'Ocean/util/type';

const SizeType = tuple('large', 'small', 'medium');

export type SizeType = (typeof SizeType)[number];
export type DirectionType = 'horizontal' | 'vertical';
