import { ocean } from '@cyan-ocean/ui/System';
import { OceanComponent } from '@cyan-ocean/ui/System/system.type';
import { cx } from '@cyan-ocean/ui/util/common';
import { opacityTransition } from '@cyan-ocean/ui/util/transition';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { isNoPass } from '../util/common';
import { AlertProvider, Status } from './context';
import { baseStyle, statusStyle, variantStyle } from './theme';

const AlertWrapper = styled.div`
  ${opacityTransition('alert-model')}
`;

type AlertStatus = 'info' | 'success' | 'warning' | 'error';

export type AlertVariant =
  | 'solid'
  | 'left-line'
  | 'bottom-line'
  | 'top-line'
  | 'normal';

interface Alert {
  status?: AlertStatus;
  onClose?: () => void;
  visible?: boolean;
  variant?: AlertVariant;
  reuse?: boolean;
}

interface AlertProps extends OceanComponent<'div', Alert> {}

const Alert = (props: AlertProps) => {
  const {
    status = 'success',
    visible,
    className,
    variant = 'normal',
    reuse = false,
    ...restProps
  } = props;

  const [innerVisible, setVisible] = useState(visible ?? true);
  const colorSchema = Status[status].colorSchema;

  const AlertBaseStyle = {
    ...statusStyle(colorSchema),
    ...baseStyle,
    ...(variant !== 'normal' && variant && variantStyle[variant](colorSchema)),
  };

  useEffect(() => {
    !isNoPass(visible) && setVisible(visible);
  }, [visible]);

  return (
    <AlertProvider value={{ status, setVisible, variant }}>
      <AlertWrapper>
        {!reuse ? (
          <CSSTransition
            timeout={330}
            appear
            in={innerVisible}
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
        ) : (
          <div>
            <ocean.div
              __css={AlertBaseStyle}
              className={cx('ocean-alert-wrapper', className)}
              {...restProps}
            />
          </div>
        )}
      </AlertWrapper>
    </AlertProvider>
  );
};

export default Alert;
