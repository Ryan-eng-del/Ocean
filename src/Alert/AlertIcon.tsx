import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import React from 'react';
import { Status, useAlertContext } from './context';
import { part } from './theme';

interface AlertIcon {}
interface AlertIconProps extends OceanComponent<'div', AlertIcon> {}

const AlertIcon = (props: AlertIconProps) => {
  const { status, variant } = useAlertContext();
  const IconStyle = part.icon[status];
  const AlertIcon = Status[status].icon;

  return (
    <ocean.div
      __css={IconStyle}
      {...props}
      c={variant === 'solid' ? '#fff' : undefined}
    >
      {AlertIcon}
    </ocean.div>
  );
};

export default AlertIcon;
