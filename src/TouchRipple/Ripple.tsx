import styled from '@emotion/styled';
import React from 'react';
import { ButtonType } from '../Button';

interface Ripple {
  rippleSize: number;
  rippleX: number;
  rippleY: number;
  type: ButtonType;
  animationColor?: string;
}

const RippleStyle = styled.span<{
  style: any;
  type: ButtonType;
  animationColor?: string;
}>`
  position: absolute;
  opacity: 0;
  animation-name: enter;
  animation-duration: 550ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  z-index: -1;
  background-color: ${(props) => {
    if (props.animationColor) return props.animationColor;

    let color = '#f9fafb';
    color = props.type === 'primary' ? '#f9fafb' : color;
    color =
      props.type === 'outline' || props.type === 'text'
        ? 'rgb(180, 210, 241)'
        : color;
    color = props.type === 'danger' ? 'rgb(241, 187, 187)' : color;
    return color;
  }};

  display: block;
  pointer-events: none;

  ${(props) => ({
    ...props.style,
  })};

  @keyframes enter {
    0% {
      transform: scale(0);
      opacity: 0.8;
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export const Ripple: React.FC<Ripple> = (props) => {
  const { rippleSize, rippleX, rippleY, type, animationColor } = props;

  // 将 ripple 圆心放在 点击位置上
  const RippleStyleObj = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX,
  };

  return (
    <RippleStyle
      style={RippleStyleObj}
      type={type}
      animationColor={animationColor}
    />
  );
};
