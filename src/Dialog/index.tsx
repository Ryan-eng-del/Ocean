import { CloseOutlined } from '@ant-design/icons';
import Button from 'Ocean/Button';
import { offEvent, onEvent, stopPropagation } from 'Ocean/util/dom';
import React, { ReactNode, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AlignType } from '../common/type';
import { GlobalFontSize } from '../common/variable';
import { useHiddenScroll } from '../hooks/useHiddenScroll';
import {
  DialogBody,
  DialogContent,
  DialogItem,
  DialogTitle,
  DialogWrapper,
} from './style';
import { DrawerFooter } from './style/index';

interface Drawer {
  visible: boolean;
  children: ReactNode;
  onCancel: () => void;
  onOk: () => void | Promise<any>;
  title: any;
  align?: AlignType;
  footer?: ReactNode;
  cancelText?: string;
  okText?: string;
  size?: string;
  fullScreen?: boolean;
}

const Drawer = (props: Drawer) => {
  const {
    visible,
    children,
    onCancel,
    title,
    align = 'right',
    footer,
    cancelText,
    okText,
    size,
    fullScreen,
  } = props;
  const [innerVisible, setInnerVisible] = useState(props.visible);
  const [loading, setLoading] = useState(false);

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

  const handleOk = () => {
    const result = props.onOk();
    if (result instanceof Promise && result.then) {
      setLoading(true);
      result.then(() => {
        setLoading(false);
      });
    }
  };

  return (
    <DialogWrapper className="ocean-dialog-wrapper">
      <CSSTransition
        in={innerVisible}
        classNames="mark-drawer"
        timeout={330}
        unmountOnExit
        appear
      >
        <DialogItem className="ocean-dialog-item">
          <CSSTransition
            in={innerVisible}
            classNames={`fadedrawer-${align}-content`}
            timeout={330}
            unmountOnExit
            appear
          >
            <DialogBody
              className="ocean-dialog-body"
              align={align}
              size={size}
              fullScreen={fullScreen}
            >
              <DialogTitle className="ocean-dialog-title">
                <div className="title">
                  <span> {title}</span>
                </div>
                <CloseOutlined
                  className="ocean-close-icon"
                  onClick={onCancel}
                  style={{ fontSize: GlobalFontSize.large }}
                />
              </DialogTitle>
              <DialogContent className="ocean-dialog-content">
                {children}
              </DialogContent>
              {footer || (
                <DrawerFooter className="ocean-dialog-footer">
                  <Button
                    type="outline"
                    width={80}
                    className="cancel-button"
                    onClick={onCancel}
                  >
                    {cancelText || '取消'}
                  </Button>
                  <Button
                    type="primary"
                    width={90}
                    loading={loading}
                    onClick={handleOk}
                    className="confirm-button"
                  >
                    {okText || '确定'}
                  </Button>
                </DrawerFooter>
              )}
            </DialogBody>
          </CSSTransition>
        </DialogItem>
      </CSSTransition>
    </DialogWrapper>
  );
};

export default Drawer;
