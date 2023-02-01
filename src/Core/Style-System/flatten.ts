import { isObject } from 'Ocean/util/common';

export const flatten = (theme: Record<string, any>): Record<string, any> => {
  const recursive = (theme: Record<string, any>): Record<string, any> => {
    if (!theme) return theme;
    return Object.entries(theme).reduce(
      (result: Record<string, any>, [token, value]) => {
        if (isObject(value)) {
          Object.entries(recursive(value)).forEach(
            ([childToken, childValue]) => {
              result[`${token}.${childToken}`] = childValue;
            },
          );
        } else {
          result[token] = value;
        }
        return result;
      },
      {} as Record<string, any>,
    );
  };
  return recursive(theme);
};

export const flattenToken = (theme: Record<string, any>) => {
  const flattenTokenEntries = Object.entries(flatten(theme)).map(
    ([token, value]) => {
      const enhanceToken = { value };
      return [token, enhanceToken] as [string, { value: string }];
    },
  );
  return Object.fromEntries(flattenTokenEntries);
};
