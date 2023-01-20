import {
  CheckCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import {
  GlobalColor,
  GlobalFontSize,
  GlobalMargin,
  GlobalPadding,
} from 'Ocean/common/variable';
import { opacityTransition } from 'Ocean/Drawer/style/animation';
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { isNoPass } from '../util/common';

const AlertWrapper = styled.div`
  ${opacityTransition('alert-model')}
`;

const AlertContainer = styled.div<{ backColor: string; isTitle: boolean }>`
  display: flex;
  padding: ${GlobalPadding.md};
  background-color: ${(props) => props.backColor};
  border-radius: 6px;
  .ocean-icon {
    margin-right: ${GlobalMargin.ms};
  }

  .close-icon {
    cursor: pointer;
    font-size: ${GlobalFontSize.small};
  }

  .ocean-content {
    flex: 1;
    display: flex;
    flex-direction: column;

    .ocean-inner-content {
      font-size: ${(props) =>
        props.isTitle ? GlobalFontSize.medium : GlobalFontSize.small};
      padding-top: ${(props) => (props.isTitle ? 0 : '10px')};
    }
  }
`;
interface Alert {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  content?: string;
  showClear?: boolean;
  onClose?: () => void;
  style?: CSSProperties;
  showIcon?: boolean;
  closeElement?: ReactNode;
  visible?: boolean;
}

const primaryColor = GlobalColor.OceanPrimaryColor,
  errorColor = GlobalColor.OceanRedColor,
  successColor = '#00b42a',
  warningColor = '#ff7d00',
  defaultFontSize = GlobalFontSize.medium;

const LightInfoBg = '#e8f3ff',
  LightSuccessBg = '#e8ffea',
  LightWarningBg = '#fef7e8',
  LightErrorBg = '#feece8';

//toDo dark 模式
// const DarkInfoBg = '#253757',
//   DarkSuccessBg = '#22482c',
//   DarkWarningBg = '#573d25',
//   DarkErrorBg = '#553332';

const Alert = (props: Alert) => {
  const {
    type,
    title,
    content,
    showClear,
    style,
    showIcon = true,
    closeElement,
    visible,
    onClose,
  } = props;

  const [innerVisible, setVisible] = useState(visible ?? true);

  useEffect(() => {
    if (!isNoPass(visible)) {
      setVisible(visible);
    }
  }, [visible]);

  const alertIcon = useMemo(() => {
    if (type === 'info') {
      return (
        <ExclamationCircleFilled
          style={{ color: primaryColor, fontSize: defaultFontSize }}
        />
      );
    }
    if (type === 'error') {
      return (
        <CloseCircleFilled
          style={{ color: errorColor, fontSize: defaultFontSize }}
        />
      );
    }

    if (type === 'success') {
      return (
        <CheckCircleFilled
          style={{ color: successColor, fontSize: defaultFontSize }}
        />
      );
    }
    if (type === 'warning') {
      return (
        <ExclamationCircleFilled
          style={{ color: warningColor, fontSize: defaultFontSize }}
        />
      );
    }
    return (
      <ExclamationCircleFilled
        style={{ color: primaryColor, fontSize: defaultFontSize }}
      />
    );
  }, [type]);

  const close = () => {
    setVisible(false);
    onClose?.();
  };

  const isTitle = isNoPass(title);

  const backGround = useMemo(() => {
    let result = LightInfoBg;
    switch (type) {
      case 'error':
        result = LightErrorBg;
        break;
      case 'success':
        result = LightSuccessBg;
        break;
      case 'info':
        result = LightInfoBg;
        break;
      case 'warning':
        result = LightWarningBg;
        break;
    }
    return result;
  }, [type]);

  return (
    <AlertWrapper style={style}>
      <CSSTransition
        in={innerVisible}
        timeout={170}
        appear
        classNames={'alert-model'}
        unmountOnExit
      >
        <AlertContainer backColor={backGround} isTitle={isTitle}>
          {showIcon && <div className="ocean-icon">{alertIcon}</div>}
          <div className="ocean-content">
            {title ?? <div className="ocean-title">{title}</div>}
            <div className="ocean-inner-content">{content}</div>
          </div>

          {showClear && innerVisible && (
            <div className="close-icon" onClick={close}>
              {closeElement || <CloseOutlined />}
            </div>
          )}
        </AlertContainer>
      </CSSTransition>
    </AlertWrapper>
  );
};

export default Alert;
