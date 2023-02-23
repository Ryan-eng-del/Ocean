import { ocean } from '@cyan-ocean/ui/System';
import { cx } from '@cyan-ocean/ui/util/common';
import React from 'react';
import { OceanComponent } from '../System/system.type';

interface AlertTitle {}
interface AlertTitleProps extends OceanComponent<'div', AlertTitle> {}

const AlertTitle = (props: AlertTitleProps) => {
  return (
    <ocean.div
      {...props}
      className={cx('ocean-alert-title')}
      __css={{ fontWeight: 'semibold', mr: 3 }}
    />
  );
};

export default AlertTitle;
