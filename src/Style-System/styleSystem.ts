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
import interact from './config/interact';

export const MapOfSystemConfig = mergeWith(
  {},
  Color,
  SizeAndLayout,
  flexBox,
  grid,
  border,
  interact,
  space,
  typography,
  position,
  transition,
  effect,
  background,
);
