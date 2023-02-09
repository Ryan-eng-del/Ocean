import { generateStyleToken as t } from '../utils/index';
import {
  BackgroundBlendMode,
  BoxShadow,
  MixBlendMode,
  Opacity,
  Outline,
  TextShadow,
} from './css.type';

export const effect = {
  boxShadow: t.shadows('boxShadow'),
  mixBlendMode: true,
  blendMode: t.prop('mixBlendMode'),
  backgroundBlendMode: true,
  bgBlendMode: t.prop('backgroundBlendMode'),
  opacity: true,
  textShadow: t.shadows('textShadow'),
  outline: true,
};

Object.assign(effect, {
  shadow: effect.boxShadow,
});

/**
 * Types for box and text shadow properties
 */
export interface EffectProps {
  outline?: Outline | undefined;
  /**
   * The `box-shadow` property
   */
  boxShadow?: BoxShadow | number;
  /**
   * The `box-shadow` property
   */
  shadow?: BoxShadow | number;

  textShadow?: TextShadow | number;
  /**
   * The `mix-blend-mode` property
   */
  mixBlendMode?: MixBlendMode;
  /**
   * The `blend-mode` property
   */
  blendMode?: MixBlendMode;
  /**
   * The CSS `background-blend-mode` property
   */
  backgroundBlendMode?: BackgroundBlendMode;
  /**
   * The CSS `background-blend-mode` property
   */
  bgBlendMode?: BackgroundBlendMode;
  /**
   * The CSS `opacity` property
   */
  opacity?: Opacity;
}
