import styled from '@emotion/styled';
import { opacityTransition } from 'Ocean/Drawer/style/animation';
import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import { cx } from 'Ocean/util/common';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { isNoPass } from '../util/common';
import { AlertProvider, Status } from './context';
import { baseStyle, statusStyle, variantStyle } from './theme';

const AlertWrapper = styled.div`
  ${opacityTransition('alert-model')}
`;

type AlertStatus = 'info' | 'success' | 'warning' | 'error';

export type AlertVariant = 'solid' | 'left-line' | 'bottom-line' | 'top-line';

interface Alert {
  status?: AlertStatus;
  onClose?: () => void;
  visible?: boolean;
  variant?: AlertVariant;
}

interface AlertProps extends OceanComponent<'div', Alert> {}

const Alert = (props: AlertProps) => {
  const {
    status = 'success',
    visible,
    className,
    variant,
    ...restProps
  } = props;

  const [innerVisible, setVisible] = useState(visible ?? true);
  const colorSchema = Status[status].colorSchema;

  const AlertBaseStyle = {
    ...statusStyle(colorSchema),
    ...baseStyle,
    ...(variant && variantStyle[variant](colorSchema)),
  };

  useEffect(() => {
    !isNoPass(visible) && setVisible(visible);
  }, [visible]);

  return (
    <AlertProvider value={{ status, setVisible, variant }}>
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
