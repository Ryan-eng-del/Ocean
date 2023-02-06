import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import React from 'react';
import { Status, useAlertContext } from './context';

interface AlertIcon {}
interface AlertIconProps extends OceanComponent<'div', AlertIcon> {}

const AlertIcon = (props: AlertIconProps) => {
  const { status, variant } = useAlertContext();
  const colorSchema = Status[status].colorSchema;
  const AlertIcon = Status[status].icon;

  return (
    <ocean.div
      {...props}
      __css={{
        c: variant === 'solid' ? '#fff' : `${colorSchema}.600`,
        fontSize: 'xl',
        paddingRight: 3,
      }}
    >
      {AlertIcon}
    </ocean.div>
  );
};

export default AlertIcon;
