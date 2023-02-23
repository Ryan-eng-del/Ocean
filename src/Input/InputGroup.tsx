import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent, StyleProps } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';
import { filterProps } from '../System/filterProps';

interface InputGroup {}
interface InputGroupProps extends OceanComponent<'input', InputGroup> {}

const InputGroup = forwardRef<any, InputGroupProps>((props, ref) => {
  const { children, ...restProps } = props;
  const { restCssProps, elementProps } = filterProps(restProps);

  const getValidChildren = (children: any) => {
    return Children.toArray(children).filter((child: any) =>
      isValidElement(child),
    );
  };

  const validChildren = getValidChildren(children);

  const baseInputStyle: StyleProps = {};

  const baseStyle: StyleProps = {
    display: 'flex',
    position: 'relative',
  };

  validChildren.forEach((child: any) => {
    if (child.type.displayName === 'InputLeftAddon') {
      baseInputStyle.borderLeftRadius = 0;
    }
    if (child.type.displayName === 'InputRightAddon') {
      baseInputStyle.borderRightRadius = 0;
    }

    if (child.type.displayName === 'InputRightIcon') {
      baseInputStyle.paddingRight = 12;
    }

    if (child.type.displayName === 'InputLeftIcon') {
      baseInputStyle.paddingLeft = 12;
    }
  });

  const clones = validChildren.map((child: any) => {
    return child.type.displayName === 'Input'
      ? cloneElement(
          child,
          Object.assign({}, baseInputStyle, child.props, elementProps),
        )
      : child;
  });

  return (
    <ocean.div
      {...restCssProps}
      ref={ref}
      __css={baseStyle}
      className={cx('ocean-input-group', props.className)}
    >
      {clones}
    </ocean.div>
  );
});

export default InputGroup;
