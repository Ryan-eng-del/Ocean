import { StyleProps } from '../System/system.type';

export const pseudoSelectors = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: '&:hover, &[data-hover]',
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: '&:active, &[data-active]',
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: '&:focus, &[data-focus]',
  /**
   * Styles for the highlighted state.
   */
  _highlighted: '&[data-highlighted]',
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: '&:focus-within',
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: '&:focus-visible, &[data-focus-visible]',
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: '&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: '&::before',
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: '&::after',
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: '&:empty',
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: '&[aria-expanded=true], &[data-expanded]',
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: '&[aria-checked=true], &[data-checked]',
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: '&[aria-pressed=true], &[data-pressed]',
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: '&[aria-invalid=true], &[data-invalid]',
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: '&[data-valid], &[data-state=valid]',
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: '&[data-loading], &[aria-busy=true]',
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: '&[aria-selected=true], &[data-selected]',
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: '&[hidden], &[data-hidden]',
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: '&:-webkit-autofill',
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: '&:nth-of-type(even)',
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: '&:nth-of-type(odd)',
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: '&:first-of-type',
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: '&:last-of-type',
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: '&:not(:first-of-type)',
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: '&:not(:last-of-type)',
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: '&:visited',
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: '&[aria-current=page]',
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: '&[aria-current=step]',
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate:
    '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',

  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: '&::placeholder',
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: '&:placeholder-shown',
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: '&:fullscreen',
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: '&::selection',
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: '[dir=rtl] &, &[dir=rtl]',
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: '[dir=ltr] &, &[dir=ltr]',
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: '@media (prefers-color-scheme: dark)',
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
};

export type Pseudos<T = StyleProps> = {
  [P in keyof typeof pseudoSelectors]?: T;
};

export const pseudoPropNames = Object.keys(
  pseudoSelectors,
) as (keyof typeof pseudoSelectors)[];
