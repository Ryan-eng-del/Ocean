import { mergeWith } from 'lodash';
import {
  background,
  border,
  Color,
  effect,
  flexBox,
  grid,
  position,
  SizeAndLayout,
  space,
  transition,
  typography,
} from './config';

export const MapOfSystemConfig = mergeWith(
  {},
  Color,
  SizeAndLayout,
  flexBox,
  grid,
  border,
  space,
  typography,
  position,
  transition,
  effect,
  background,
);
