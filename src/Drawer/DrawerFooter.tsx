import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent, StyleProps } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
import React from 'react';

interface DrawerFooter {}
interface DrawerFooterProps extends OceanComponent<'div', DrawerFooter> {}

const DrawerFooter = (props: DrawerFooterProps) => {
  const {} = props;

  const baseStyle: StyleProps = {
    display: 'flex',
    justify: 'flex-end',
    p: 3,
  };
  return (
    <ocean.div
      __css={baseStyle}
      className={cx('ocean-divider-footer', props.className)}
      {...props}
    />
  );
};

export default DrawerFooter;
