import { opacityTransition } from 'Ocean/Drawer/style/animation';
import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React, { ReactNode, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { AlertProvider } from './context';
import { baseStyle, variant } from './theme';

const AlertWrapper = styled.div`
  ${opacityTransition('alert-model')}
`;

type AlertStatus = 'info' | 'success' | 'warning' | 'error';

interface Alert {
  type?: AlertStatus;
  title?: string;
  content?: string;
  showClear?: boolean;
  onClose?: () => void;
  showIcon?: boolean;
  closeElement?: ReactNode;
  visible?: boolean;
}

interface AlertProps extends OceanComponent<'div', Alert> {}

const Alert = (props: AlertProps) => {
  const { type = 'success', visible, className, ...restProps } = props;

  const [innerVisible, setVisible] = useState(visible ?? true);

  const AlertBaseStyle = {
    ...variant[type],
    ...baseStyle,
  };

  return (
    <AlertProvider value={{ status: type, setVisible }}>
      <AlertWrapper>
        <CSSTransition
          in={innerVisible}
          timeout={330}
          appear
          classNames={'alert-model'}
          unmountOnExit
        >
          <div>
            <ocean.div
              __css={AlertBaseStyle}
              className={cx('ocean-alert-wrapper', className)}
              {...restProps}
            />
          </div>
        </CSSTransition>
      </AlertWrapper>
    </AlertProvider>
  );
};

export default Alert;
