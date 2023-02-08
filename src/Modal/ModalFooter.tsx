import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';

interface ModalFooter {}
interface ModalFooterProps extends OceanComponent<'div', ModalFooter> {}

const ModalFooter = (props: ModalFooterProps) => {
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

export default ModalFooter;