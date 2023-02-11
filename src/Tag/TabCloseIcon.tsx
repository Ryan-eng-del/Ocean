import { CloseOutlined } from '@ant-design/icons';
import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';
import { closeIcon } from './theme';

interface TabCloseIcon {}
interface TabCloseIconProps extends OceanComponent<'div', TabCloseIcon> {}

const TabCloseIcon = (props: TabCloseIconProps) => {
  const baseIconStyle: StyleProps = {
    ...closeIcon,
  };
  return (
    <ocean.span
      {...props}
      __css={baseIconStyle}
      className={cx('ocean-divider-text', props.className)}
    >
      <CloseOutlined />
    </ocean.span>
  );
};
export default TabCloseIcon;
