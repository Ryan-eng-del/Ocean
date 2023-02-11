import { SizeType } from 'Ocean/common/type';
import { ocean } from 'Ocean/System';
import { OceanComponent, StyleProps } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React from 'react';
import { baseStyle, sizeStyle, variant } from './theme';

interface Tag {
  size?: SizeType;
  type?: 'solid' | 'outline';
}
interface TagProps extends OceanComponent<'div', Tag> {}

const Tag = (props: TagProps) => {
  const { size = 'medium', type = 'solid', ...restProps } = props;

  const baseTagStyle: StyleProps = {
    ...baseStyle,
    ...sizeStyle[size],
    ...(type !== 'solid' && variant[type]),
  };

  return (
    <ocean.div
      {...restProps}
      __css={baseTagStyle}
      className={cx('ocean-tag', props.className)}
    ></ocean.div>
  );
};
export default Tag;
