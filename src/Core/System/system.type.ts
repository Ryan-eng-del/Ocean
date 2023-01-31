import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';
import { Color, SizeAndLayoutProps } from '../Style-System/config';
export type DOMElements = keyof JSX.IntrinsicElements;

export type OceanComponentProps = {
  __css?: FlattenSimpleInterpolation | CSSObject;
};

export interface StyleProps extends SizeAndLayoutProps, Color {}

export type OceanHTMLComponent = {
  [T in DOMElements]: (
    props: StyleProps & { children?: any } & OceanComponentProps,
  ) => JSX.Element;
};

export type SystemProps = StyleProps & { children?: any } & OceanComponentProps;
