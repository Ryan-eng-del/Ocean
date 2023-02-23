import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent, StyleProps } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
import React, { forwardRef } from 'react';

interface TabIcon {
  placement?: 'left' | 'right';
}

interface TabIconProps extends OceanComponent<'div', TabIcon> {}

const TabIcon = forwardRef<any, TabIconProps>((props, ref) => {
  const { placement, ...restProps } = props;
  const baseStyle: StyleProps = {
    pr: placement === 'left' ? 3 : undefined,
    pl: placement === 'right' ? 3 : undefined,
  };

  return (
    <ocean.div
      {...restProps}
      ref={ref}
      __css={baseStyle}
      className={cx('tag-icon', props.className)}
    />
  );
});

const TagLeftIcon = forwardRef<any, TabIconProps>((props, ref) => {
  return <TabIcon ref={ref} placement="left" {...props} />;
});

const TagRightIcon = forwardRef<any, TabIconProps>((props, ref) => {
  return <TabIcon ref={ref} placement="right" {...props} />;
});

export { TagLeftIcon, TagRightIcon };
