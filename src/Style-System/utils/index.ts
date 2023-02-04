import CSS from 'csstype';
import { CSSGlobalTheme } from '../styleSystem.type';

type CSSProp = keyof CSS.Properties;

export const createTransform = ({
  scale,
  transform,
}: {
  scale?: string;
  transform?: any;
}) => {
  return (value: string, theme: CSSGlobalTheme) => {
    const { cssMap } = theme;

    if (transform) {
      return transform(value);
    }

    const varRef = cssMap[`${scale}.${value}`]?.varRef;
    return varRef ? varRef : value;
  };
};

export const toThemeConfig = (
  prop: string,
): (<T extends CSSProp>(property: T | T[]) => any) => {
  return <T extends CSSProp>(property: T | T[]) => {
    const result: Record<string, any> = {
      property,
      scale: prop,
    };

    result.transform = createTransform({ scale: prop });
    return result;
  };
};

export const generateStyleToken = {
  prop: (property: string, scale?: string, transform?: any) => {
    return {
      property,
      scale,
      transform: createTransform({ transform }),
    };
  },

  colors: toThemeConfig('colors'),
  borders: toThemeConfig('borders'),
  radius: toThemeConfig('radius'),
  sizes: toThemeConfig('sizes'),
  transition: toThemeConfig('transition'),
  shadows: toThemeConfig('shadows'),
  typography: toThemeConfig('typography'),
  space: toThemeConfig('space'),
  borderWidths: toThemeConfig('borderWidth'),
};
