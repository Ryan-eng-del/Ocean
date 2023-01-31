import { generateStyleToken as GST } from '../utils/index';

export const grid = {
  gridGap: GST.prop('gridGap'),
  gridColumnGap: GST.prop('gridColumnGap'),
  gridRowGap: GST.prop('gridRowGap'),
  gridColumn: GST.prop('gridColumn'),
  gridRow: GST.prop('gridRow'),
  gridTemplate: GST.prop('gridRow'),
  gridTemplateColumns: GST.prop('gridTemplateColumns'),
  gridTemplateRows: GST.prop('gridTemplateRows'),
  gridTemplateAreas: GST.prop('gridTemplateAreas'),
  gridArea: GST.prop('gridArea'),
};
