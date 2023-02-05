import React, { useContext, useRef } from 'react';
import ButtonGroupContext from '../ButtonGroup/ButtonGroupContext';
import { BaseButtonProps, ButtonProps } from './index';

import { ocean } from 'Ocean';
import TouchRipple from 'Ocean/TouchRipple/TouchRipple';
import { tuple } from '../util/type';
import { ButtonBaseStyle } from './style';
import { ButtonLoading } from './style/index';
import { baseStyle, size as sizeMap, variant } from './theme/index';
const ButtonPropsTuple = tuple(
  'size',
  'type',
  'style',
  'width',
  'height',
  'animationColor',
  'loading',
);

type ButtonPropsTupleType = typeof ButtonPropsTuple;

const ButtonBase = React.forwardRef(function (props: ButtonProps) {
  const {
    children,
    size = 'medium',
    type = 'text',
    loading = false,
    animationColor,
  } = props;
  const rippleRef = useRef<any>(null);
  const buttonGroupContext = useContext(ButtonGroupContext);

  const defaultPropsValue = (propsKey: keyof BaseButtonProps | string) => {
    let propsValue = undefined;
    propsValue = propsKey === 'size' ? 'medium' : undefined;
    propsValue = propsKey === 'type' ? 'text' : undefined;
    return propsValue;
  };

  const generateOwnState = (key: ButtonPropsTupleType) => {
    const ownState: BaseButtonProps = key.reduce<any>((pre, cur) => {
      pre[cur] =
        props[cur as keyof BaseButtonProps] ||
        buttonGroupContext![cur as keyof BaseButtonProps] ||
        defaultPropsValue(cur);
      return pre;
    }, {});

    for (const key in ownState) {
      if (!ownState[key as keyof BaseButtonProps])
        delete ownState[key as keyof BaseButtonProps];
    }

    return ownState;
  };

  const ownState = generateOwnState([
    'size',
    'type',
    'style',
    'width',
    'height',
    'animationColor',
    'loading',
  ]);

  const buttonBaseStyle = {
    ...baseStyle,
    ...sizeMap[size],
    ...variant[type],
  };

  function useHandleRipper(
    action: 'stopRipple' | 'startRipple',
    eventCallback: any,
  ) {
    return (event: any) => {
      if (eventCallback) eventCallback(event);
      if (rippleRef.current) {
        rippleRef.current[action](event);
      }
    };
  }

  const handleOnMouseDown = useHandleRipper('startRipple', props.onMouseDown);

  return (
    <ButtonBaseStyle ownState={ownState}>
      <ocean.button
        __css={{ ...buttonBaseStyle }}
        onMouseDown={handleOnMouseDown}
        className={props.className}
        onClick={(e) => props.onClick && props.onClick(e)}
      >
        {loading ? <ButtonLoading type={type} /> : ''}
        {children}
        <TouchRipple
          ref={rippleRef}
          type={type}
          animationColor={animationColor}
        ></TouchRipple>
      </ocean.button>
    </ButtonBaseStyle>
  );
});

export default ButtonBase;
