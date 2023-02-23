import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent, StyleProps } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
import React from 'react';

interface TabLabel {}
interface TabLabelProps extends OceanComponent<'div', TabLabel> {}

const TabLabel = (props: TabLabelProps) => {
  const {} = props;
  const baseStyle: StyleProps = {};
  return (
    <ocean.div
      {...props}
      __css={baseStyle}
      className={cx('ocean-label', props.className)}
    ></ocean.div>
  );
};
export default TabLabel;
