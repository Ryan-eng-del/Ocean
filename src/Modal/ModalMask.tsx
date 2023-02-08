import React from 'react';

import { ocean } from 'Ocean';
import { OceanComponent } from 'Ocean/System/system.type';
import { CSSTransition } from 'react-transition-group';
import { StyleProps } from '../System/system.type';
import { useModalContext } from './context';

interface ModalMask {}
interface ModalMaskProps extends OceanComponent<'div', ModalMask> {}

const ModalMask = (props: ModalMaskProps) => {
  const { scrollBehavior } = useModalContext();
  const baseStyle: StyleProps = {
    top: 0,
    left: 0,
    position: 'fixed',
    w: 'screenW',
    h: 'screen',
    background: 'rgba(29, 33, 41, 60%)',
    zIndex: 10,
    overflow: scrollBehavior === 'outside' ? 'auto' : undefined,
  };

  const { visible } = useModalContext();

  return (
    <CSSTransition
      in={visible}
      classNames="mark-modal"
      timeout={330}
      unmountOnExit
      appear
    >
      <ocean.div __css={baseStyle} {...props}></ocean.div>
    </CSSTransition>
  );
};

export default ModalMask;
