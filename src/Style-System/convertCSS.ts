import { MapOfSystemConfig as MapProps } from './styleSystem';
import { CSSGlobalTheme } from './styleSystem.type';

const getCss = (theme: CSSGlobalTheme, MapProps: any) => {
  return (styleProps: Record<string, any>) => {
    const attributes: Record<string, any> = {};
    let curProperty;

    for (const property in styleProps) {
      // debugger;
      if (Reflect.has(MapProps, property)) {
        curProperty = MapProps[property]; // {property: scale: transform: }
        let p = curProperty.property; // T | T[]
        let value = styleProps[property]; // red.500
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
};

export const convertCSS = (theme: CSSGlobalTheme) => {
  return getCss(theme, MapProps);
};
