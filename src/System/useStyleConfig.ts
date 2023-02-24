import { resolveStyleConfig } from './resolveStyleConfig';
export const tagTheme = {
  variants: {
    solid: { color: 'red' },
    outline: {},
  },

  baseStyle: {
    root: { color: 'red' },
    container: { color: 'red' },
  },

  sizes: {
    small: { root: { color: 'red' }, container: { color: 'red' } },
    large: { color: 'blue' },
  },

  defaultProps: {
    size: 'small',
    variant: 'solid',
    colorScheme: 'blue',
  },

  parts: ['root', 'container', 'header'],
};

// {root: {color: 'red', color: 'blue', color: 'red'  }, container: {}}

function omit<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keys: K[],
) {
  const result: Record<string, any> = {};

  Object.keys(object).forEach((key) => {
    if (keys.includes(key as K)) return;
    result[key] = object[key];
  });
  return result;
}

export function useStyleConfig(props: any) {
  // 用户 props
  const userProps = omit(props, ['children']);
  // 系统主题
  const systemTheme = {};
  // 与默认 props 合并后的 props, eg: { size: 'big', variant: 'solid', colorScheme: 'blue' } props
  const mergeProps = { ...tagTheme.defaultProps, ...systemTheme, ...userProps };
  const getStyle = resolveStyleConfig(tagTheme);
  // 传递 合并后的 props,得到最终的 style
  const style = getStyle(mergeProps);
  return style;
}

// const props = { size: 'big' };

// cseStyleConfig(props);
