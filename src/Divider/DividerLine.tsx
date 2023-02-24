import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
import React from 'react';

interface DividerLine {}
interface DividerLineProps extends OceanComponent<'div', DividerLine> {}

const DividerLine = (props: DividerLineProps) => {
  return (
    <ocean.div
      __css={{ flex: 1, border: '1px', borderColor: 'gray.200' }}
      className={cx('ocean-divider-line', props.className)}
    ></ocean.div>
  );
};

export default DividerLine;
