import { ocean } from 'Ocean';
import { StyleProps } from 'Ocean/System/system.type';
import TouchRipple from 'Ocean/TouchRipple/TouchRipple';
import { className } from 'Ocean/util/common';
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

  const handleOnMouseDown = useHandleRipper('startRipple', props.onMouseDown);
  const contentProps = { leftIcon, rightIcon, children };

  return (
    <ocean.button
      __css={buttonBaseStyle}
      onMouseDown={handleOnMouseDown}
      className={className('ocean-button', props.className)}
      onClick={(e) => {
        if (loading) return;
        onClick && onClick(e);
      }}
      style={style}
      {...restProps}
    >
      {loading && <ButtonLoadingCpn type={type} loadingText={!!loadingText} />}

      {loading ? (
        loadingText || (
          <ocean.div opacity={0} pointerEvents="none">
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
