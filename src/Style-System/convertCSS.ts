import { isObject } from '../util/common';
import { pseudoSelectors } from './pseudos';
import { MapOfSystemConfig as MapProps } from './styleSystem';
import { CSSGlobalTheme } from './styleSystem.type';

const getCss = (theme: CSSGlobalTheme, MapProps: any, pseudos: any) => {
  const css = (styleProps: Record<string, any>) => {
    const attributes: Record<string, any> = {};
    let curProperty;
    for (let property in styleProps) {
      let value = styleProps[property]; // red.500

      if (Reflect.has(pseudos, property)) {
        property = pseudos[property];
      }

      if (isObject(value)) {
        attributes[property] = css(value);
        continue;
      }

      if (Reflect.has(MapProps, property)) {
        curProperty = MapProps[property]; // {property: scale: transform: }
        let p = curProperty.property; // T | T[]

        if (curProperty === true) {
          attributes[property] = value;
          continue;
        }

        if (curProperty?.transform) {
          value = curProperty?.transform(value, theme);
        }

        // !value 说明该属性不是 ocean 系统提供的变量
        // if (!value) continue;

        if (Array.isArray(p)) {
          for (const key of p) {
            attributes[key] = value;
          }
          continue;
        }
        attributes[p] = value;
      }
    }

    return attributes;
  };
  return css;
};

export const convertCSS = (theme: CSSGlobalTheme) => {
  return getCss(theme, MapProps, pseudoSelectors);
};
