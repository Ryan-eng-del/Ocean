import styled from '@emotion/styled';
import { ocean } from 'Ocean/System';
import { onEvent } from 'Ocean/util/dom';
import { opacityTransition } from 'Ocean/util/transition';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { OceanComponent, StyleProps } from '../System/system.type';
import { isNoPass } from '../util/common';
import { offEvent } from '../util/dom';
import { ModalProvider } from './context';
import ModalMask from './ModalMask';

interface Modal {
  visible: boolean;
  onCancel?: any;
  scrollBehavior?: 'inside' | 'outside';
}
interface ModalProps extends OceanComponent<'div', Modal> {}

export const ModalWrapper = styled.div`
  position: relative;
  ${opacityTransition('fade-Modal')}
  ${opacityTransition('mark-modal')}
`;

const Modal = (props: ModalProps) => {
  const { visible, onCancel, scrollBehavior = 'inside', ...restProps } = props;

  const [wrapperVisible, setWrapperVisible] = useState(visible);

  const clickDocumentCancel = (e: any) => {
    const clickDom = e.target as HTMLElement;
    e.stopPropagation();
    if (clickDom.getAttribute('class')?.includes('ocean-modal-mark')) {
      onCancel();
    }
  };

  useEffect(() => {
    !isNoPass(visible) && setWrapperVisible(visible);
  }, [visible]);

  useEffect(() => {
    wrapperVisible && onEvent(window, 'click', clickDocumentCancel)();
    return () => {
      offEvent(window, 'click', clickDocumentCancel)();
    };
  }, [wrapperVisible]);

  // 抽屉弹出时，body 滚动条隐藏
  // 抽屉合上时，body 滚动条显示
  // useHiddenScroll('body', wrapperVisible as boolean);

  const baseStyle: StyleProps = {
    position: 'relative',
    top: '10%',
    left: '50%',
    zIndex: 20,
    bg: '#fff',
    w: '500px',
    p: 3,
    rounded: 'lg',
    transform: 'translate(-50%,0)',
    display: 'flex',
    flexDirection: 'column',
    maxH: scrollBehavior === 'inside' ? 'calc(100vh - 25%)' : undefined,
  };

  return (
    <ModalProvider
      value={{ visible: wrapperVisible, cancel: onCancel, scrollBehavior }}
    >
      <ModalWrapper>
        <ModalMask className="ocean-modal-mark">
          <CSSTransition
            in={wrapperVisible}
            timeout={330}
            appear
            mountOnEnter
            classNames="fade-Modal"
            unmountOnExit
          >
            <ocean.div __css={baseStyle} {...restProps}></ocean.div>
          </CSSTransition>
        </ModalMask>
      </ModalWrapper>
    </ModalProvider>
  );
};

export default Modal;
