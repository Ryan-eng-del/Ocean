import { MapOfSystemConfig } from 'Ocean/Style-System/styleSystem';
import { pseudoSelectors } from '../Style-System/pseudos';
import { systemProps } from './system';

export const filterProps = (restProps: Record<string, any>) => {
  let restCssProps = <Record<string, any>>{};
  let elementProps = <Record<string, any>>{};

  for (const k in restProps) {
    if (Reflect.has(systemProps, k)) {
      restCssProps[k] = restProps[k];
    } else {
      elementProps[k] = restProps[k];
    }
  }

  return { restCssProps, elementProps };
};

export const propNames = [
  ...Object.keys(MapOfSystemConfig),
  ...Object.keys(pseudoSelectors),
];

const allPropNames = new Set([
  ...propNames,
  'textStyle',
  'layerStyle',
  'apply',
  'noOfLines',
  'focusBorderColor',
  'errorBorderColor',
  '__css',
  'css',
]);

export function shouldForwardProp(prop: string): boolean {
  return !allPropNames.has(prop);
}
