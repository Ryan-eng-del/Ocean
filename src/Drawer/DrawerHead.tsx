import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';
import { StyleProps } from '../System/system.type';

interface DrawerHead {}
interface DrawerHeadProps extends OceanComponent<'div', DrawerHead> {}

const DrawerHead = (props: DrawerHeadProps) => {
  const baseStyle: StyleProps = {
    display: 'flex',
    justify: 'space-between',
    align: 'center',
    p: 3,
  };
  return (
    <ocean.div
      __css={baseStyle}
      className={cx('ocean-divider-head', props.className)}
      {...props}
    />
  );
};

export default DrawerHead;
