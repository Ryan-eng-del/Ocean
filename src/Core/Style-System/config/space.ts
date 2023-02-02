import { generateStyleToken as GST } from '../utils/index';
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

export const space = {
  margin: GST.space('margin'),
  marginTop: GST.space('marginTop'),
  marginRight: GST.space('marginRight'),
  marginBottom: GST.space('marginBottom'),
  marginLeft: GST.space('marginLeft'),
  marginBlock: GST.space('marginBlock'),
  padding: GST.space('padding'),
  paddingTop: GST.space('paddingTop'),
  paddingRight: GST.space('paddingRight'),
  paddingBottom: GST.space('paddingBottom'),
  paddingLeft: GST.space('paddingLeft'),
  paddingBlock: GST.space('paddingBlock'),
};

Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  mb: space.marginBottom,
  ml: space.marginLeft,
  p: space.padding,
  pt: space.paddingTop,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  pr: space.paddingRight,
});

export interface SpaceProps {
  margin?: Margin;
  marginTop?: MarginTop;
  marginRight?: MarginRight;
  marginBottom?: MarginBottom;
  marginLeft?: MarginLeft;
  marginBlock?: MarginBlock;
  padding?: Padding;
  paddingTop?: PaddingTop;
  paddingRight?: PaddingRight;
  paddingBottom?: PaddingBottom;
  paddingLeft?: PaddingLeft;
  paddingBlock?: PaddingBlock;
}
