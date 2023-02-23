import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
import React from 'react';

interface DrawerHeadTitle {}
interface DrawerHeadTitleProps extends OceanComponent<'div', DrawerHeadTitle> {}

const DrawerHeadTitle = (props: DrawerHeadTitleProps) => {
  return (
    <ocean.div
      {...props}
      __css={{ fontWeight: 'semibold', fontSize: 'lg' }}
      className={cx('ocean-divider-text', props.className)}
    />
  );
};

export default DrawerHeadTitle;
