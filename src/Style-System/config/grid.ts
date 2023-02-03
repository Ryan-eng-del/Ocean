import { generateStyleToken as GST } from '../utils/index';
import {
  GridArea,
  GridColumn,
  GridColumnGap,
  GridGap,
  GridRow,
  GridRowGap,
  GridTemplateAreas,
  GridTemplateColumns,
  GridTemplateRows,
} from './css.type';

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

export interface GridProps {
  gridGap?: GridGap;
  gridColumnGap?: GridColumnGap;
  gridRowGap?: GridRowGap;
  gridColumn?: GridColumn;
  gridRow?: GridRow;
  gridTemplate?: GridRow;
  gridTemplateColumns?: GridTemplateColumns;
  gridTemplateRows?: GridTemplateRows;
  gridTemplateAreas?: GridTemplateAreas;
  gridArea?: GridArea;
}
