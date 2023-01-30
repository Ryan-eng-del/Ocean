import { config } from './config/color';

export const convertCss = (styleProps: Record<string, any>) => () => {
  console.log(config, styleProps, 'props');
  const attributes: Record<string, any> = {};
  let curProperty;
  for (const property in styleProps) {
    if (Reflect.has(config, property)) {
      curProperty = config[property];
      let p = curProperty.property;
      attributes[p] = styleProps[property];
    }
  }

  return attributes;
};
