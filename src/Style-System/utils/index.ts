import { CSSGlobalTheme } from '../styleSystem.type';

export const createTransform = (scale: string) => {
  return (value: string, theme: CSSGlobalTheme) => {
    const { cssMap } = theme;
    const varRef = cssMap[`${scale}.${value}`].varRef;
    return varRef;
  };
};

export const toThemeConfig = (prop: string): any => {
  return (property: string) => {
    const result: Record<string, any> = {
      property,
      scale: prop,
    };

    result.transform = createTransform(prop);
    return result;
  };
};

export const generateStyleToken = {
  prop: (property: string) => {
    return { property };
  },

  colors: toThemeConfig('colors'),
  borders: toThemeConfig('borders'),
  radius: toThemeConfig('radius'),
  sizes: toThemeConfig('sizes'),
  transition: toThemeConfig('transition'),
  shadows: toThemeConfig('shadows'),
  typography: toThemeConfig('typography'),
  space: toThemeConfig('space'),
};
