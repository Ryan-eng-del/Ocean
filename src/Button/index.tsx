import { SizeType } from 'Ocean/common/type';
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react';
import { tuple } from '../util/type';
import ButtonBase from './ButtonBase';

const ButtonType = tuple(
  'primary',
  'danger',
  'outline',
  'warning',
  'gradual',
  'text',
);

export type ButtonType = (typeof ButtonType)[number];

export interface BaseButtonProps {
  size?: SizeType;
  type: ButtonType;
  children: ReactNode;
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
  animationColor?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

type NativeButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>;
type AnchorButtonProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLElement>, 'type'>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonBase {...props}>{props.children}</ButtonBase>;
};

export default Button;
