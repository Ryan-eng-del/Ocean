import { SizeType } from '@cyan-ocean/ui/common/type';
import React, { CSSProperties, ReactNode } from 'react';
import { OceanComponent } from '../System/system.type';
import { tuple } from '../util/type';
import ButtonBase from './ButtonBase';

const ButtonType = tuple('primary', 'danger', 'outline', 'gradual', 'text');

export type ButtonType = (typeof ButtonType)[number];
export interface BaseButtonProps {
  size?: SizeType;
  type?: ButtonType;
  style?: CSSProperties;
  animationColor?: string;
  loading?: boolean;
  leftIcon?: ReactNode;
  loadingText?: string;
  rightIcon?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ButtonProps
  extends OceanComponent<'button', BaseButtonProps> {}

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonBase {...props}>{props.children}</ButtonBase>;
};

export default Button;
