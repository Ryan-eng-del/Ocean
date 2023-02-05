import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';
import {
  BorderProps,
  ColorProps,
  SizeAndLayoutProps,
} from '../Style-System/config';
import { BackgroundProps } from '../Style-System/config/background';
import { EffectProps } from '../Style-System/config/effect';
import { FlexBoxProps } from '../Style-System/config/flex';
import { GridProps } from '../Style-System/config/grid';
import { InteractProps } from '../Style-System/config/interact';
import { PositionProps } from '../Style-System/config/position';
import { SpaceProps } from '../Style-System/config/space';
import { TransitionProps } from '../Style-System/config/transition';
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
    SpaceProps,
    TypographyProps,
    EffectProps,
    BackgroundProps,
    TransitionProps,
    InteractProps {}

export type OceanHTMLComponent = {
  [T in DOMElements]: (
    props: StyleProps & { children?: any } & OceanComponentProps &
      JSX.IntrinsicElements[T],
  ) => JSX.Element;
};

export type SystemProps = StyleProps & { children?: any } & OceanComponentProps;

// const a: SystemProps;
