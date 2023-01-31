import { mergeWith } from 'lodash';
import { Color, SizeAndLayout } from './config';

export const MapOfSystemConfig = mergeWith({}, Color, SizeAndLayout);
