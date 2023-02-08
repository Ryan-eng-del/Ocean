import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';
import { StyleProps } from '../System/system.type';

interface DrawerBody {}
interface DrawerBodyProps extends OceanComponent<'div', DrawerBody> {}

const DrawerBody = (props: DrawerBodyProps) => {
  const baseStyle: StyleProps = {
    flex: '1',
    p: 3,
    overflow: 'auto',
  };

  return (
    <ocean.div
      __css={baseStyle}
      className={cx('ocean-divider-body', props.className)}
      {...props}
    />
  );
};

export default DrawerBody;
