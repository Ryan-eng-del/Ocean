import {
  Animation,
  Transition,
  TransitionDelay,
  TransitionDuration,
  TransitionProperty,
  TransitionTimingFunction,
  WillChange,
} from './css.type';
import { generateStyleToken as t } from './utils/index';

export const transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop('transitionDuration', 'transition.duration'),
  transitionProperty: t.prop('transitionProperty', 'transition.property'),
  transitionTimingFunction: t.prop(
    'transitionTimingFunction',
    'transition.easing',
  ),
};

export interface TransitionProps {
  /**
   * The CSS `transition` property
   */
  transition?: Transition;
  /**
   * The CSS `transition-property` property
   */
  transitionProperty?: TransitionProperty;
  /**
   * The CSS `transition-timing-function` property
   */
  transitionTimingFunction?: TransitionTimingFunction | string | number;
  /**
   * The CSS `transition-duration` property
   */
  transitionDuration?: TransitionDuration | string | number;
  /**
   * The CSS `transition-delay` property
   */
  transitionDelay?: TransitionDelay | string | number;
  /**
   * The CSS `animation` property
   */
  animation?: Animation | string;
  /**
   * The CSS `will-change` property
   */
  willChange?: WillChange;
}
