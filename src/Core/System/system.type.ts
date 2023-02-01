import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';
import {
  BorderProps,
  ColorProps,
  SizeAndLayoutProps,
} from '../Style-System/config';
import { FlexBoxProps } from '../Style-System/config/flex';
import { GridProps } from '../Style-System/config/grid';
import { PositionProps } from '../Style-System/config/position';
import { SpaceProps } from '../Style-System/config/space';
import { TypographyProps } from '../Style-System/config/typography';
export type DOMElements = keyof JSX.IntrinsicElements;

export type OceanComponentProps = {
  __css?: FlattenSimpleInterpolation | CSSObject;
};

export interface StyleProps
  extends SizeAndLayoutProps,
    ColorProps,
    BorderProps,
    FlexBoxProps,
    GridProps,
    PositionProps,
    SizeAndLayoutProps,
    SpaceProps,
    TypographyProps {}

export type OceanHTMLComponent = {
  [T in DOMElements]: (
    props: StyleProps & { children?: any } & OceanComponentProps &
      JSX.IntrinsicElements[T],
  ) => JSX.Element;
};

export type SystemProps = StyleProps & { children?: any } & OceanComponentProps;

// const a: SystemProps;
