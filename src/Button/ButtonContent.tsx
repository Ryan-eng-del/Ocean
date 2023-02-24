import { ocean } from '@cyan-ocean/ui';
import React, { ReactNode } from 'react';

export const ButtonContent = (props: {
  leftIcon: ReactNode | undefined;
  rightIcon: ReactNode | undefined;
  children: any;
}) => {
  const { leftIcon, rightIcon, children } = props;

  return (
    <ocean.div
      pointerEvents="none"
      display={'flex'}
      justify="center"
      align={'center'}
      className="button-content"
    >
      {leftIcon && <ocean.span paddingLeft={3}>{leftIcon}</ocean.span>}
      <ocean.span paddingX={3}>{children}</ocean.span>
      {rightIcon && <ocean.span paddingRight={3}>{rightIcon}</ocean.span>}
    </ocean.div>
  );
};
