import { Pseudos } from '@cyan-ocean/ui/Style-System/pseudos';
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
  __css?: StyleProps;
  css?: StyleProps;
};

export type OceanPublicComponentProps = {
  css?: StyleProps;
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
    InteractProps,
    Pseudos {}

export type OceanHTMLComponent = {
  [T in DOMElements]: (
    props: StyleProps &
      React.ComponentPropsWithoutRef<T> &
      OceanComponentProps &
      JSX.IntrinsicElements[T],
  ) => JSX.Element;
};

export type HTMLOceanProps<T extends DOMElements> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'ref' | keyof StyleProps
>;

export type OceanComponent<T extends DOMElements, K> = Omit<
  HTMLOceanProps<T>,
  keyof K
> &
  StyleProps &
  K &
  OceanPublicComponentProps;

export type SystemProps = StyleProps & OceanComponentProps;
