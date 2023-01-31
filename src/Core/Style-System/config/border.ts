import { generateStyleToken as GST } from '../utils/index';

export const border = {
  border: GST.prop('border'),
  borderWidth: GST.prop('borderWidth'),
  borderStyle: GST.prop('borderStyle'),
  borderColor: GST.prop('borderColor'),
  borderRadius: GST.prop('borderRadius'),
  borderTop: GST.prop('borderTop'),
  borderTopLeftRadius: GST.prop('borderTopLeftRadius'),
  borderRight: GST.prop('borderRight'),
  borderBottom: GST.prop('borderBottom'),
  borderBottomLeftRadius: GST.prop('borderBottomLeftRadius'),
  borderBottomRightRadius: GST.prop('borderBottomRightRadius'),
  borderLeft: GST.prop('borderLeft'),
  borderTopWidth: GST.prop('borderTopWidth'),
  borderTopColor: GST.prop('borderTopColor'),
  borderTopStyle: GST.prop('borderTopStyle'),
  borderBottomWidth: GST.prop('borderBottomWidth'),
  borderBottomColor: GST.prop('borderBottomColor'),
  borderBottomStyle: GST.prop('borderBottomStyle'),
  borderLeftWidth: GST.prop('borderLeftWidth'),
  borderLeftColor: GST.prop('borderLeftColor'),
  borderLeftStyle: GST.prop('borderLeftStyle'),
  borderRightWidth: GST.prop('borderRightWidth'),
  borderRightColor: GST.prop('borderRightColor'),
  borderRightStyle: GST.prop('borderRightStyle'),
};

export type Border = Partial<typeof border>;
