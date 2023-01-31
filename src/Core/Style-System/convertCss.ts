import { MapOfSystemConfig } from './styleSystem';

const getCss = (styleProps: Record<string, any>, config: any) => {
  const attributes: Record<string, any> = {};
  let curProperty;

  for (const property in styleProps) {
    if (Reflect.has(config, property)) {
      curProperty = config[property];
      let p = curProperty.property;
      attributes[p] = styleProps[property];
    }
  }
  console.log(attributes, 'attributes');
  return attributes;
};

export const convertCss = (styleProps: Record<string, any>) => {
  return getCss(styleProps, MapOfSystemConfig);
};
