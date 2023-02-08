import styled from '@emotion/styled';
import { ocean } from 'Ocean/System';
import { offEvent, onEvent, stopPropagation } from 'Ocean/util/dom';
import { opacityTransition } from 'Ocean/util/transition';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AlignType } from '../common/type';
import { useHiddenScroll } from '../hooks/useHiddenScroll';
import { OceanComponent, StyleProps } from '../System/system.type';
import { DrawerProvider } from './context';
import DrawerMask from './DrawerMask';
import { drawerBodyAnimation } from './style/animation';
import { position } from './theme';

interface Drawer {
  visible: boolean;
  onCancel: () => void;
  align?: AlignType;
}

interface DrawerProps extends OceanComponent<'div', Drawer> {}

export const DialogWrapper = styled.div`
  ${opacityTransition('mark-drawer')}
  ${drawerBodyAnimation}
`;

const Drawer = (props: DrawerProps) => {
  const { visible, onCancel, align = 'right' } = props;
  const [innerVisible, setInnerVisible] = useState(props.visible);

  const clickDocument = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const clickDom = e.target as HTMLElement;
    stopPropagation(e)(() => {
      if (clickDom.getAttribute('class')?.includes('mark-drawer')) {
        onCancel();
      }
    });
  };

  useEffect(() => {
    setInnerVisible(props.visible);
  }, [visible]);

  useEffect(() => {
    innerVisible && onEvent(window, 'click', clickDocument)();
    return () => {
      innerVisible && offEvent(window, 'click', clickDocument)();
    };
  }, [innerVisible]);

  // 抽屉弹出时，body 滚动条隐藏
  // 抽屉合上时，body 滚动条显示
  useHiddenScroll('body', innerVisible);

  const baseStyle: StyleProps = {
    position: 'fixed',
    zIndex: 20,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    w: 96,
    ...position[align],
  };

  return (
    <DrawerProvider
      value={{
        visible: innerVisible,
        placement: align,
        cancel: onCancel,
      }}
    >
      <DialogWrapper className="ocean-drawer-wrapper">
        <CSSTransition
          in={innerVisible}
          classNames={`fadedrawer-${align}-content`}
          timeout={330}
          unmountOnExit
          appear
        >
          <>
            <ocean.div {...props} __css={baseStyle} className="ocean-drawer" />
            <DrawerMask />
          </>
        </CSSTransition>
      </DialogWrapper>
    </DrawerProvider>
  );
};

export default Drawer;
