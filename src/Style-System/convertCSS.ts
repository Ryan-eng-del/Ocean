import { MapOfSystemConfig as MapProps } from './styleSystem';
import { CSSGlobalTheme } from './styleSystem.type';

const getCss = (theme: CSSGlobalTheme, MapProps: any) => {
  return (styleProps: Record<string, any>) => {
    const attributes: Record<string, any> = {};
    let curProperty;

    for (const property in styleProps) {
      if (Reflect.has(MapProps, property)) {
        curProperty = MapProps[property]; // {p: scale: transform: }
        let p = curProperty.property; // color
        let value = styleProps[property]; // red.500
        value = curProperty.transform(value, theme);
        attributes[p] = value;
      }
    }

    return attributes;
  };
};

export const convertCSS = (theme: CSSGlobalTheme) => {
  return getCss(theme, MapProps);
};
