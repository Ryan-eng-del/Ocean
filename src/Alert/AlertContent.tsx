import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import React from 'react';
interface AlertContent {}
interface AlertContentProps extends OceanComponent<'div', AlertContent> {}

const AlertContent = (props: AlertContentProps) => {
  return <ocean.div {...props} __css={{ fontSize: 'md', flex: 1 }}></ocean.div>;
};

export default AlertContent;
