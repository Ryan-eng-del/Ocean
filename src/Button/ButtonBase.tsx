import { ocean } from '@cyan-ocean/ui';
import { StyleProps } from '@cyan-ocean/ui/System/system.type';
import TouchRipple from '@cyan-ocean/ui/TouchRipple/TouchRipple';
import { cx } from '@cyan-ocean/ui/util/common';
import React, { useRef } from 'react';
import { ButtonContent } from './ButtonContent';
import { ButtonLoadingCpn } from './ButtonLoading';
import { ButtonProps } from './index';
import {
  baseStyle,
  loadingStyle,
  size as sizeMap,
  variant,
} from './theme/index';

const ButtonBase = React.forwardRef(function (props: ButtonProps) {
  const {
    children,
    size = 'medium',
    type = 'text',
    loading = false,
    animationColor,
    style,
    onClick,
    loadingText,
    leftIcon,
    rightIcon,
    ...restProps
  } = props;

  const rippleRef = useRef<any>(null);

  //toDo 抽象封装成 Hook useMultiplyStyle（props, theme）
  const buttonBaseStyle: StyleProps = {
    ...baseStyle,
    ...sizeMap[size],
    ...variant[type],
    ...loadingStyle(loading),
  };

  function useHandleRipper(
    action: 'stopRipple' | 'startRipple',
    eventCallback: any,
  ) {
    return (event: any) => {
      if (loading) return;
      if (eventCallback) eventCallback(event);
      if (rippleRef.current) {
        rippleRef.current[action](event);
      }
    };
  }

  const contentProps = { leftIcon, rightIcon, children };

  const handleOnClick = useHandleRipper('startRipple', onClick);

  return (
    <ocean.button
      __css={buttonBaseStyle}
      className={cx('ocean-button', props.className)}
      onClick={(e) => {
        handleOnClick(e);
      }}
      style={style}
      {...restProps}
    >
      {loading && <ButtonLoadingCpn type={type} loadingText={!!loadingText} />}
      {loading ? (
        loadingText || (
          <ocean.div opacity={'0'} pointerEvents="none">
            {children}
          </ocean.div>
        )
      ) : (
        <ButtonContent {...contentProps} />
      )}
      <TouchRipple
        ref={rippleRef}
        type={type}
        animationColor={animationColor}
      />
    </ocean.button>
  );
});

export default ButtonBase;
