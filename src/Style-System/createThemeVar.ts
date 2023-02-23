export const cssVar = (token: string, prefix: string) => {
  const varValue = `--${[prefix, token].join('-')}`;
  const valRef = `var(${varValue})`;
  return {
    varValue,
    varRef: valRef,
  };
};

export const tokenToCssVar = (token: string, prefix: string) => {
  return cssVar(token.replace(/\./g, '-'), prefix);
};

export const createThemeVar = (
  flattenToken: Record<string, any>,
  prefix: 'ocean',
) => {
  const cssMap: Record<string, any> = {};
  const globalCssVar: Record<string, any> = {};
  for (const [token, tokenValue] of Object.entries(flattenToken)) {
    const { varValue, varRef } = tokenToCssVar(token, prefix);
    globalCssVar[varValue] = tokenValue.value;
    cssMap[token] = { value: tokenValue.value, var: varValue, varRef };
  }
  return { cssMap, globalCssVar };
};
