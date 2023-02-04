import { generateStyleToken as t } from '../utils/index';
import {
  BackgroundAttachment,
  BackgroundClip,
  BackgroundImage,
  BackgroundPosition,
  BackgroundRepeat,
  BackgroundSize,
  Color,
} from './css.type';
export const background = {
  background: t.colors('background'),
  backgroundColor: t.colors('backgroundColor'),
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: true,
  bgSize: t.prop('backgroundSize'),
  bgPosition: t.prop('backgroundPosition'),
  bg: t.colors('background'),
  bgColor: t.colors('backgroundColor'),
  bgPos: t.prop('backgroundPosition'),
  bgRepeat: t.prop('backgroundRepeat'),
  bgAttachment: t.prop('backgroundAttachment'),
  bgGradient: t.prop('backgroundImage'),
  bgClip: t.prop('backgroundClip'),
};

Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage,
});

export interface BackgroundProps {
  /**
   * The CSS `background` property
   */
  bg?: Color;
  /**
   * The CSS `background-clip` property
   */
  bgClip?: BackgroundClip;
  /**
   * The CSS `background-clip` property
   */
  backgroundClip?: BackgroundClip;
  /**
   * The CSS `background` property
   */
  background?: Color;
  /**
   * The CSS `background-color` property
   */
  bgColor?: Color;
  /**
   * The CSS `background-color` property
   */
  backgroundColor?: Color;
  /**
   * The CSS `background-image` property
   */
  backgroundImage?: BackgroundImage;
  /**
   * The background-gradient shorthand
   */
  bgGradient?: BackgroundImage;
  /**
   * The CSS `background-size` property
   */
  backgroundSize?: BackgroundSize | number;
  /**
   * The CSS `background-position` property
   */
  bgPos?: BackgroundPosition | number;
  /**
   * The CSS `background-position` property
   */
  backgroundPosition?: BackgroundPosition | number;
  /**
   * The CSS `background-image` property
   */
  bgImage?: BackgroundImage;
  /**
   * The CSS `background-image` property
   */
  bgImg?: BackgroundImage;
  /**
   * The CSS `background-repeat` property
   */
  bgRepeat?: BackgroundRepeat;
  /**
   * The CSS `background-repeat` property
   */
  backgroundRepeat?: BackgroundRepeat;
  /**
   * The CSS `background-size` property
   */
  bgSize?: BackgroundSize | number;
  /**
   * The CSS `background-attachment` property
   */
  bgAttachment?: BackgroundAttachment;
  /**
   * The CSS `background-attachment` property
   */
  backgroundAttachment?: BackgroundAttachment;
  /**
   * The CSS `background-position` property
   */
  bgPosition?: BackgroundPosition | number;
}
