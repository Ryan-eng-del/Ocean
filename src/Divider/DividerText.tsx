import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';

interface DividerText {}
interface DividerTextProps extends OceanComponent<'div', DividerText> {}

const DividerText = (props: DividerTextProps) => {
  return (
    <ocean.div
      {...props}
      __css={{ padding: 5, fontWeight: 'semibold' }}
      className={cx('ocean-divider-text', props.className)}
    />
  );
};

export default DividerText;
