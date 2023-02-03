import { mergeWith } from 'lodash';
import {
  border,
  Color,
  flexBox,
  grid,
  position,
  SizeAndLayout,
  space,
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
);
