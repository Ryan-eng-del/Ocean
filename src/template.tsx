import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';

interface XXX {}
interface XXXProps extends OceanComponent<'div', XXX> {}

const XXX = (props: XXXProps) => {
  const {} = props;
  const baseStyle: StyleProps = {};
  return (
    <ocean.div
      {...props}
      __css={baseStyle}
      className={cx('ocean-divider-text', props.className)}
    ></ocean.div>
  );
};
export default XXX;
