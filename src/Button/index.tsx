import { SizeType } from 'Ocean/common/type';
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react';
import { StyleProps } from '../System/system.type';
import { tuple } from '../util/type';
import ButtonBase from './ButtonBase';

const ButtonType = tuple('primary', 'danger', 'outline', 'gradual', 'text');

export type ButtonType = (typeof ButtonType)[number];

export interface BaseButtonProps {
  size?: SizeType;
  type: ButtonType;
  children: ReactNode;
  style?: CSSProperties;
  animationColor?: string;
  loading?: boolean;
  leftIcon?: ReactNode;
  loadingText?: string;
  rightIcon?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

type NativeButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>;
type AnchorButtonProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLElement>, 'type'>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> &
  StyleProps;

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonBase {...props}>{props.children}</ButtonBase>;
};

export default Button;
