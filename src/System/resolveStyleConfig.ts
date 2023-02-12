// eslint-disable-next-line @typescript-eslint/ban-types
const isFunction = <T extends Function>(value: any): value is T => {
  return typeof value === 'function';
};

// config.baseStyle ?? {}, props
export function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

// sizes: {
//   small: { root: { color: 'red' }, container: { color: 'red' } },
//   large: { root: { color: 'blue' }, container: { color: 'blue' } },
// },

function createResolver(theme: any) {
  return (
    config: any,
    prop: 'variants' | 'sizes',
    value: any | undefined,
    props: Record<string, any>,
  ) => {
    const result: Record<string, any> = {};
    console.log(theme, 'theme');
    const normalized = ['large'];

    if (!normalized) return result;

    const len = normalized.length;
    // const isSingle = len === 1;

    const isMultipart = !!config.parts;

    for (let i = 0; i < len; i++) {
      const styles = runIfFn(config[prop]?.[normalized[i]], props);
      // { root: { color: 'blue' }, container: { color: 'blue' } }

      if (!styles) continue;
      // result: {root: { color: 'blue' }, container: { color: 'blue' } }
      if (isMultipart) {
        config.parts?.forEach((part: any) => {
          Object.assign(result, {
            [part]: styles[part],
          });
        });
        continue;
      }

      if (!isMultipart) {
        Object.assign(result, styles);
        continue;
      }
    }

    return result;
  };
}

export function resolveStyleConfig(config: any) {
  return (props: any) => {
    const { variant, size, theme } = props;
    const recipe = createResolver(theme);

    // baseStye 又包括多个 Part 去合并 在该sizes variants 下的样式
    // 最终使用的时候，通过 theme.tabList 就会得到 该组件在当前sizes, variants下的样式
    // 下面的这一坨，
    // {},
    // runIfFn(config.baseStyle ?? {}, props),
    // recipe(config, 'sizes', size, props),
    // recipe(config, 'variants', variant, props),

    return Object.assign(
      {},
      runIfFn(config.baseStyle ?? {}, props),
      recipe(config, 'sizes', size, props),
      recipe(config, 'variants', variant, props),
    );
  };
}
