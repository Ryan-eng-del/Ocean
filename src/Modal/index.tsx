import { CloseOutlined } from '@ant-design/icons';
import Button from 'Ocean/Button';
import { DividerAlign, PxType } from 'Ocean/common/type';
import { onEvent } from 'Ocean/util/dom';
import React, { ReactNode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CSSTransition } from 'react-transition-group';
import { useHiddenScroll } from '../hooks/useHiddenScroll';
import { offEvent } from '../util/dom';
import {
  ButtonWrapper,
  ModalContent,
  ModalContentBody,
  ModalContentFooter,
  ModalHeader,
  ModalMark,
  ModalWrapper,
} from './style';

interface Modal {
  visible?: boolean;
  width?: PxType;
  title: string;
  type?: string;
  titleIcon?: any;
  onCancel?: any;
  children: ReactNode;
  footer?: ReactNode;
  okText?: string;
  cancelText?: string;
  footerPosition?: DividerAlign;
  onOk?: any;
  confirm?: boolean;
}

const CONTAINER_NAME = 'ocean-modal';

const Modal = (props: Modal) => {
  const {
    visible,
    width = '500px',
    title,
    type,
    titleIcon,
    onCancel,
    children,
    footer,
    okText,
    cancelText,
    footerPosition = 'right',
    onOk,
    confirm,
  } = props;

  const [wrapperVisible, setWrapperVisible] = useState(visible);
  const [loading, setIsLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);

  const removeConfirmContainer = () => {
    const dom = document.querySelector('.' + CONTAINER_NAME);
    console.log(dom, 'dom');
    dom &&
      setTimeout(() => {
        document.body.removeChild(dom as HTMLElement);
      }, 400);
  };

  const okConfirm = (result: any, isConfirm: boolean, isCancel: boolean) => {
    if (result instanceof Promise && result.then) {
      isCancel ? setCancelLoading(true) : setIsLoading(true);
      result.then(() => {
        isCancel ? setCancelLoading(false) : setIsLoading(false);
        if (isConfirm) removeConfirmContainer();
        setWrapperVisible(false);
      });
    } else {
      if (isConfirm) removeConfirmContainer();
      setWrapperVisible(false);
    }
  };

  const cancel = () => {
    const result = onCancel?.();
    if (confirm) {
      okConfirm(result, true, true);
    } else {
      okConfirm(result, false, true);
    }
  };

  const clickDocumentCancel = (e: any) => {
    const clickDom = e.target as HTMLElement;
    e.stopPropagation();
    if (clickDom.getAttribute('class')?.includes('ocean-modal-mark')) {
      cancel();
    }
  };

  useEffect(() => {
    setWrapperVisible(visible);
  }, [visible]);

  useEffect(() => {
    wrapperVisible && onEvent(window, 'click', clickDocumentCancel)();
    return () => {
      offEvent(window, 'click', clickDocumentCancel)();
    };
  }, [wrapperVisible]);

  // 抽屉弹出时，body 滚动条隐藏
  // 抽屉合上时，body 滚动条显示
  useHiddenScroll('body', wrapperVisible as boolean);

  const ok = () => {
    const result = onOk?.();
    if (confirm) {
      okConfirm(result, true, false);
    } else {
      okConfirm(result, false, false);
    }
  };

  return (
    <ModalWrapper>
      <CSSTransition
        in={wrapperVisible}
        timeout={330}
        appear
        mountOnEnter
        classNames="fadeModal"
        unmountOnExit
      >
        <ModalMark className="ocean-modal-mark">
          <CSSTransition
            in={wrapperVisible}
            timeout={330}
            appear
            mountOnEnter
            classNames="fadeContent"
            unmountOnExit
          >
            <ModalContent
              className="ocean-modal-content"
              modalWidth={width}
              onClick={(e: any) => e.stopPropagation()}
            >
              <ModalHeader className="ocean-modal-header">
                <div className="ocean-title">
                  <i />
                  <div className="title">
                    {type && titleIcon}
                    <span>{title}</span>
                  </div>
                  <CloseOutlined className="close-icon" onClick={cancel} />
                </div>
              </ModalHeader>
              <ModalContentBody className="ocean-modal-content-body">
                {children}
              </ModalContentBody>
              <ModalContentFooter className="ocean-modal-content-footer">
                {footer || (
                  <ButtonWrapper footerPosition={footerPosition}>
                    <Button
                      type="outline"
                      width={92}
                      onClick={cancel}
                      className="cancel-btn"
                      loading={cancelLoading}
                    >
                      {cancelText || '取消'}
                    </Button>

                    <Button
                      width={90}
                      onClick={ok}
                      type="primary"
                      loading={loading}
                    >
                      {okText || '确定'}
                    </Button>
                  </ButtonWrapper>
                )}
              </ModalContentFooter>
            </ModalContent>
          </CSSTransition>
        </ModalMark>
      </CSSTransition>
    </ModalWrapper>
  );
};
Modal.confirm = (props: Modal) => {
  const div = document.createElement('div');
  div.setAttribute('class', CONTAINER_NAME);
  document.body.appendChild(div);
  const root = createRoot(div);

  root.render(
    <Modal {...props} visible confirm>
      {props.children}
    </Modal>,
  );
};

export default Modal;
