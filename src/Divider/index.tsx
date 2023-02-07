import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import React from 'react';
import { cx } from '../util/common';

interface Divider {}

export interface DividerProps extends OceanComponent<'div', Divider> {}

const Divider = (props: DividerProps) => {
  const { ...restProps } = props;

  const baseStyle: StyleProps = {
    boxSizing: 'border-box',
    display: 'flex',
    align: 'center',
    p: 3,
  };

  return (
    <>
      <ocean.div
        __css={baseStyle}
        className={cx('ocean-divider-line', props.className)}
        {...restProps}
      />
    </>
  );
};

export default Divider;
