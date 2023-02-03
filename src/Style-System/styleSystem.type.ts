export type CSSMap = Record<
  string,
  { value: string; valueRef: string; varRef: string }
>;

export type CSSGlobalTheme = {
  cssVar: Record<string, any>;
  cssMap: CSSMap;
};
