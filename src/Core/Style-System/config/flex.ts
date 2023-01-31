import { generateStyleToken as GST } from '../utils/index';

export const flexBox = {
  alignItems: GST.prop('alignItems'),
  alignContent: GST.prop('alignContent'),
  justifyItems: GST.prop('justifyItems'),
  justifyContent: GST.prop('justifyContent'),
  flexWrap: GST.prop('flexWrap'),
  flexDirection: GST.prop('flexDirection'),
  flex: GST.prop('flex'),
  flexFlow: GST.prop('flexFlow'),
  flexGrow: GST.prop('flexGrow'),
  flexShrink: GST.prop('flexShrink'),
  flexBasis: GST.prop('flexBasis'),
  justifySelf: GST.prop('justifySelf'),
  alignSelf: GST.prop('alignSelf'),
  order: GST.prop('order'),
};
