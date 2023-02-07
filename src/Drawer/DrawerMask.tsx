import React from 'react';

import { ocean } from 'Ocean';
import { OceanComponent } from 'Ocean/System/system.type';
import { CSSTransition } from 'react-transition-group';
import { StyleProps } from '../System/system.type';
import { useDrawerContext } from './context';

interface DrawerMask {}
interface DrawerMaskProps extends OceanComponent<'div', DrawerMask> {}

const DrawerMask = (props: DrawerMaskProps) => {
  const baseStyle: StyleProps = {
    top: 0,
    left: 0,
    position: 'fixed',
    w: 'screenW',
    h: 'screen',
    background: 'rgba(29, 33, 41, 60%)',
    zIndex: 10,
  };

  const { visible } = useDrawerContext();

  return (
    <CSSTransition
      in={visible}
      classNames="mark-drawer"
      timeout={330}
      unmountOnExit
      appear
    >
      <ocean.div __css={baseStyle} {...props}></ocean.div>
    </CSSTransition>
  );
};

export default DrawerMask;
