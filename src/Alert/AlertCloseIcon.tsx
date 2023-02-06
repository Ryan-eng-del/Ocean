import { CloseOutlined } from '@ant-design/icons';
import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import React from 'react';
import { useAlertContext } from './context';

interface AlertCloseIcon {}
interface AlertCloseIconProps extends OceanComponent<'div', AlertCloseIcon> {}

const AlertCloseIcon = (props: AlertCloseIconProps) => {
  const { setVisible } = useAlertContext();
  return (
    <ocean.div
      className="close-icon"
      onClick={() => setVisible(false)}
      __css={{ cursor: 'pointer' }}
      {...props}
    >
      {<CloseOutlined />}
    </ocean.div>
  );
};

export default AlertCloseIcon;
