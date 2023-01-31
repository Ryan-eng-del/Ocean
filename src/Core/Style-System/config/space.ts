import { generateStyleToken as GST } from '../utils/index';

export const space = {
  margin: GST.prop('margin'),
  marginTop: GST.prop('marginTop'),
  marginRight: GST.prop('marginRight'),
  marginBottom: GST.prop('marginBottom'),
  marginLeft: GST.prop('marginLeft'),
  marginBlock: GST.prop('marginBlock'),
  padding: GST.prop('padding'),
  paddingTop: GST.prop('paddingTop'),
  paddingRight: GST.prop('paddingRight'),
  paddingBottom: GST.prop('paddingBottom'),
  paddingLeft: GST.prop('paddingLeft'),
  paddingBlock: GST.prop('paddingBlock'),
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
