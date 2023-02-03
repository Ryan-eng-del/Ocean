import { createThemeVar } from './createThemeVar';
import { flattenToken } from './flatten';

export const getCssVar = (theme: Record<string, any>) => {
  const flattenTokenEntries = flattenToken(theme);
  const cssVarPrefix = 'ocean';
  // globalCssVar 用户全局 css 变量插入
  // cssMap 作为 例如 输入 red.500 时的索引键值对
  const { cssMap, globalCssVar } = createThemeVar(
    flattenTokenEntries,
    cssVarPrefix,
  );

  // const globalTheme = mergeWith({}, { cssMap, cssVar: globalCssVar });
  return { cssMap, globalCssVar };
};
