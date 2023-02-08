import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';

interface ModalHeadTitle {}
interface ModalHeadTitleProps extends OceanComponent<'div', ModalHeadTitle> {}
const ModalHeadTitle = (props: ModalHeadTitleProps) => {
  return (
    <ocean.div
      {...props}
      __css={{ fontWeight: 'semibold', fontSize: 'lg' }}
      className={cx('ocean-divider-text', props.className)}
    />
  );
};

export default ModalHeadTitle;
