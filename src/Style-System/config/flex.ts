import { generateStyleToken as GST } from '../utils/index';
import {
  AlignContent,
  AlignItems,
  AlignSelf,
  Flex,
  FlexBasis,
  FlexDirection,
  FlexFlow,
  FlexGrow,
  FlexShrink,
  FlexWrap,
  JustifyContent,
  JustifyItems,
  JustifySelf,
  Order,
} from './css.type';

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

export interface FlexBoxProps {
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  justifyItems?: JustifyItems;
  justifyContent?: JustifyContent;
  flexWrap?: FlexWrap;
  flexDirection?: FlexDirection;
  flex?: Flex;
  flexFlow?: FlexFlow;
  flexGrow?: FlexGrow;
  flexShrink?: FlexShrink;
  flexBasis?: FlexBasis;
  justifySelf?: JustifySelf;
  alignSelf?: AlignSelf;
  order?: Order;
}
