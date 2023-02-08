import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';
import { StyleProps } from '../System/system.type';
import { useModalContext } from './context';

interface ModalBody {}
interface ModalBodyProps extends OceanComponent<'div', ModalBody> {}

const ModalBody = (props: ModalBodyProps) => {
  const { scrollBehavior } = useModalContext();

  const baseStyle: StyleProps = {
    flex: '1',
    p: 3,
    overflow: scrollBehavior === 'inside' ? 'auto' : 'visible',
    color: 'gray.700',
  };

  return (
    <ocean.div
      __css={baseStyle}
      className={cx('ocean-divider-body', props.className)}
      {...props}
    />
  );
};

export default ModalBody;
