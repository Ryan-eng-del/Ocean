import {
  Margin,
  MarginBlock,
  MarginBottom,
  MarginLeft,
  MarginRight,
  MarginTop,
  Padding,
  PaddingBlock,
  PaddingBottom,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
} from './css.type';
import { generateStyleToken as GST } from './utils/index';

export const space = {
  margin: GST.space('margin'),
  marginTop: GST.space('marginTop'),
  marginRight: GST.space('marginRight'),
  marginBottom: GST.space('marginBottom'),
  marginLeft: GST.space('marginLeft'),
  marginX: GST.space(['marginLeft', 'marginRight']),
  marginY: GST.space(['marginBottom', 'marginTop']),
  marginBlock: GST.space('marginBlock'),
  padding: GST.space('padding'),
  paddingTop: GST.space('paddingTop'),
  paddingRight: GST.space('paddingRight'),
  paddingBottom: GST.space('paddingBottom'),
  paddingLeft: GST.space('paddingLeft'),
  paddingBlock: GST.space('paddingBlock'),
  paddingX: GST.space(['paddingLeft', 'paddingRight']),
  paddingY: GST.space(['paddingBottom', 'paddingTop']),
};

Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  mb: space.marginBottom,
  my: space.marginY,
  mx: space.marginX,
  ml: space.marginLeft,
  p: space.padding,
  pt: space.paddingTop,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  pr: space.paddingRight,
  px: space.paddingX,
  py: space.paddingY,
});

export interface SpaceProps {
  margin?: Margin | number;
  m?: Margin | number;
  mt?: Margin | number;
  mr?: Margin | number;
  mb?: Margin | number;
  my?: Margin | number;
  mx?: Margin | number;
  ml?: Margin | number;
  p?: Padding | number;
  pt?: Padding | number;
  pb?: Padding | number;
  pl?: Padding | number;
  pr?: Padding | number;
  px?: Padding | number;
  py?: Padding | number;
  marginX?: Margin | number;
  marginY?: Margin | number;
  paddingX?: Padding | number;
  paddingY?: Padding | number;
  marginTop?: MarginTop | number;
  marginRight?: MarginRight | number;
  marginBottom?: MarginBottom | number;
  marginLeft?: MarginLeft | number;
  marginBlock?: MarginBlock | number;
  padding?: Padding | number;
  paddingTop?: PaddingTop | number;
  paddingRight?: PaddingRight | number;
  paddingBottom?: PaddingBottom | number;
  paddingLeft?: PaddingLeft | number;
  paddingBlock?: PaddingBlock | number;
}
